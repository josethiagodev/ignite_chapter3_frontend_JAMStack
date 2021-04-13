import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream';

import Stripe from 'stripe';
import { stripe } from '../../services/stripe';

import { saveSubscription } from "./_lib/manageSubscription";


// Converter 'readable' em 'string'
async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(
      typeof chunk === 'string' ? Buffer.from(chunk) : chunk
    );
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false
  }
}

// Definindos tipos de eventos para ouvir
const relevantEvents = new Set([
  'checkout.session.completed',
  'customer.subscription.updated',
  'customer.subscription.deleted',
])

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Se o método for 'POST'
  if (req.method === 'POST') {
    const buf = await buffer(req)
    // Buscando headers da requisição
    const secret = req.headers['stripe-signature']

    // Eventos que vem do 'Webhook Stripe'
    let event: Stripe.Event;

    try {
      // Construíndo eventos pelas variávei do 'Webhook Stripe'
      event = stripe.webhooks.constructEvent(
        buf, secret, process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      // Se não for, mostra um 'Erro'
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    // Construíndo os tipos de eventos
    const { type } = event;

    // Quais eventos queremos ouvir!?
    // Se existir um tipo de evento, use o Try/Catch
    if (relevantEvents.has(type)) {
      try {
        switch (type) {
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            const subscription = event.data.object as Stripe.Subscription;

            await saveSubscription(
              subscription.id,
              subscription.customer.toString(),
              false
            );

            break;
          case 'checkout.session.completed':

            const checkoutSession = event.data.object as Stripe.Checkout.Session
            
            // Salvando eventos de 'subscribe' e 'customer'
            // Convertendo dados dos eventos em 'String'
            await saveSubscription(
              checkoutSession.subscription.toString(),
              checkoutSession.customer.toString(),
              true
            )

            break;
          default:
            throw new Error('Unhandled event.')
        }
      } catch (err) {
        return res.json({ error: 'Webhook handler failed.' })
      }
    }

    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}
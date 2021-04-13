import { query as q } from 'faunadb';
import { fauna } from "../../../services/fauna";

import { stripe } from '../../../services/stripe';

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false,
) {

  // Buscando usuário no banco do FaunaDB com o ID (customerId)
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(
        q.Match(
          q.Index('user_by_stripe_customer_id'),
          customerId
        )
      )
    )
  )
  
  // Buscando dados da 'subscription' pelo id (subscriptionId)
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  // Definindo quais dados precisamos salvar da 'subscription' no faunaDB
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,    
  }

  // Se existir uma 'createAction = true'
  if (createAction) {
    // Criando dados da 'subscriptions' no banco de dados do FaunaDB
    await fauna.query(
      q.Create(
        q.Collection('subscriptions'),
        { data: subscriptionData }
      )
    )
  } else {
    // Atualizando dados da 'subscriptions' no banco de dados do FaunaDB
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index('subscription_by_id'),
              subscriptionId,
            )
          )
        ),
        { data: subscriptionData }
      )
    )
  }

}
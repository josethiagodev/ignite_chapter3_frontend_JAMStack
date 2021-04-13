import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';
interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  // Sessão de usuário lodago
  const [session] = useSession();

  // Função executada no clique do botão 'Quero assinar'
  async function handleSubscribe() {
    // Se não existir sessão do usuário, redirecionar para autenticação Github
    if (!session) {
      signIn('github')
      return;
    }

    // Se o usuário estiver logado na aplicação,
    // ...fazer a criação da 'Checkout Session'
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button 
      type="button" 
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Quero assinar
    </button>
  );
}
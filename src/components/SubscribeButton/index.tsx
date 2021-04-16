import { useSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

// Services API
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';
interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  // Sessão de usuário lodago
  const [session] = useSession();
  const router = useRouter();

  // Função executada no clique do botão 'Quero assinar'
  const handleSubscribe = async () => {
    // Se não existir sessão do usuário, redirecionar para autenticação Github
    if (!session) {
      signIn('github')
      return;
    }

    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }

    // Se o usuário estiver logado na aplicação,
    // ...fazer a criação da 'Checkout Session'
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({
        sessionId
      })
      
    } catch (err) {
      alert(err.message)
    }
  };

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
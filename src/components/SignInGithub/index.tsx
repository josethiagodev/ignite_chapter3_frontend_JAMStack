import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInGithub() {
  const [session] = useSession();

  console.log(session)

  // Se o usuário tiver uma sessão
  return session ? (
    // mostrar botão logado
    <button 
      type="button" 
      className={styles.btnGithubLogged}
      onClick={ () => signOut() }
    >
      <FaGithub color="#39e1e5" />
      {session.user.name}
      <FiX color="#39e1e5" className={styles.closeIcon} />
    </button>
  ) : (
    // Se não tiver uma sessão, mostrar botão deslogado
    <button 
      type="button" 
      className={styles.btnGithub}
      onClick={ () => signIn('github') }
    >
      <FaGithub color="#FFFFFF" />
      Entrar com Github
    </button>
  )
}
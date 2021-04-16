import { SignInGithub } from '../SignInGithub';
import { ActiveLink} from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img src="/images/logo.svg" alt="Logotipo DevNews"/>
        
        <nav>
          <ActiveLink 
            activeClassName={styles.active} 
            href="/"
          >
            <a>Inicio</a>
          </ActiveLink>

          <ActiveLink 
            activeClassName={styles.active} 
            href="/posts"
          >
            <a>Notícias</a>
          </ActiveLink>
        </nav>
        
        <SignInGithub />
      </div>
    </header>
  );
}
import { GetServerSideProps } from 'next';
// import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import Head from 'next/head';

import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';

import { FcPlanner, FcEditImage } from "react-icons/fc";

import styles from './post.module.scss';

/* 
interface SessionProps extends Session {
  activeSubscription?: object;
}
*/

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (

    <>
      <Head>
        <title>{post.title} / DevNews</title>
      </Head>
      
      <main className={styles.pageNewsInternal}>
        <article className={styles.containerNewsInternal}>
          <h1>{post.title}</h1>
          
          <span className={styles.infoNews}>
            <time>
              <FcEditImage fontSize={17} style={{ marginRight: 6, }} />
              Front-end
            </time>
            <time>
              <FcPlanner fontSize={17} style={{ marginRight: 6, }} />
              {post.updatedAt}
            </time>
          </span>

          <div 
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
    </>

  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })
  const { slug } = params;

  // Se o usuário não estiver logado
  // (se não tiver uma inscrição ativa)
  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const prismicio = getPrismicClient(req)

  // Retornando a resposta pelo ID do 'post'
  // Convertendo o'slug' de 'Array' para 'String'
  const response = await prismicio.getByUID( 'post', String(slug), {} )

  //Post não encontrado
  if (!response) { 
    return {
      redirect: { 
        destination: '/', 
        permanent: false
      }
    }
  }

  // Formatando dados do post
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
  };

  return {
    props: {
      post,
    }
  };
}
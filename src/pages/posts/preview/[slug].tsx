import { GetStaticPaths, GetStaticProps } from 'next';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../../services/prismic';

import { FcPlanner, FcEditImage } from "react-icons/fc";

import styles from '../post.module.scss';
import { useEffect } from 'react';

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session]);

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
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className={styles.continueReading}>
            <p>Deseja continuar com a leitura?</p>
            <Link href="/">
              <a>Sim, quero me inscrever! 🤗</a>
            </Link>
          </div>

        </article>
      </main>
    </>
  );
}

// Quais posts queremos gerar na build?!
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking' // 'blocking', 'true', 'false'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismicio = getPrismicClient()

  // Retornando a resposta pelo ID do 'post'
  // Convertendo o'slug' de 'Array' para 'String'
  const response = await prismicio.getByUID( 'post', String(slug), {} );

  // Formatando dados do post
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 2)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
  };

  return {
    props: {
      post,
    },
    redirect: 60 * 30, // Post atualizado a cada 30 minutos
  };
}
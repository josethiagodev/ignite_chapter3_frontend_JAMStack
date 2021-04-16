import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';

import { FcPlanner, FcEditImage } from "react-icons/fc";
import { MdReceipt, MdDashboard, MdSubtitles, MdSettingsApplications, MdDns } from "react-icons/md";

import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | DevNews</title>
      </Head>

      <main className={styles.pageNews}>

        <ul className={styles.containerCategories}>
          <li className={styles.itemCategory}>
            <a href="">
              <MdReceipt fontSize={28} />
              <p className={styles.tagCategory}>UX Design</p>
            </a>
          </li>
          <li className={styles.itemCategory}>
            <a href="">
              <MdDashboard fontSize={26} />
              <p className={styles.tagCategory}>UI Design</p>
            </a>
          </li>
          <li className={styles.itemCategory}>
            <a href="">
              <MdSubtitles fontSize={26} />
              <p className={styles.tagCategory}>Front-End</p>
            </a>
          </li>
          <li className={styles.itemCategory}>
            <a href="">
              <MdSettingsApplications fontSize={26} />
              <p className={styles.tagCategory}>Back-End</p>
            </a>
          </li>
          <li className={styles.itemCategory}>
            <a href="">
              <MdDns fontSize={26} />
              <p className={styles.tagCategory}>DevOps</p>
            </a>
          </li>
        </ul>

        <ul className={styles.contentNews}>
          
          { posts.map(post => (

            <li className={styles.itemNews}>
              <Link href={`/posts/${post.slug}`}>
                <a key={post.slug}>
                  <h2>{post.title}</h2>
                  
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
                  
                  <p>{post.excerpt}</p>
                </a>
              </Link>
            </li>

          )) }
        </ul>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  // Buscando todos documentos do Prismic...
  const response = await prismic.query([
    //...onde o tipo seja 'documentation'
    Prismic.predicates.at('document.type', 'post'),
    /* Prismic.Predicates.any(
      'document.tags', 
      ['UX Design', 'UI Design', 'Front-End', 'Back-End', 'DevOps']
    ), */
  ], {
    // Quais dados queremos buscar da publicação?
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  console.log(response)

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  })

  return {
    props: {
      posts
    }
  }
}
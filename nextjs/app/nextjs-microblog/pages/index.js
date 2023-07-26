import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>ここにプロフィールを記載する</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <div className={utilStyles.boldText}>記事のタイトル</div>
            </Link>
            <br />
            <small className={utilStyles.lightText}>July 28, 2023</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <div className={utilStyles.boldText}>記事のタイトル</div>
            </Link>
            <br />
            <small className={utilStyles.lightText}>July 28, 2023</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <div className={utilStyles.boldText}>記事のタイトル</div>
            </Link>
            <br />
            <small className={utilStyles.lightText}>July 28, 2023</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <div className={utilStyles.boldText}>記事のタイトル</div>
            </Link>
            <br />
            <small className={utilStyles.lightText}>July 28, 2023</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}

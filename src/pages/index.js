import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import styles from './index.module.css'

const HomePage = ({ data }) => {
  return (
    <div>
      <Layout>
        <div>
          <Card image={data.pudding.childImageSharp.fixed} />
        </div>
      </Layout>
    </div>
  )
}

const Card = ({ image }) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardImg}>
        <Img fixed={image} alt='げーみんぐぷりん' />
      </div>
      <div className={styles.cardLink}>
        <Link to='https://twitter.com/takuAULS' target="_blank">Twitter</Link>
        <Link to='https://www.pixiv.net/users/2941251' target="_blank">Pixiv</Link>
        <Link to='https://github.com/TakuAULS23' target="_blank">GitHub</Link>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.center}>プロフィール</p>
        <table className={styles.cardText}>
          <tr>
            <td>名前：</td>
            <td>タク</td>
          </tr>
          <tr>
            <td>最近の趣味：</td>
            <td>SDVX,DDR,クレーンゲーム,リアル脱出ゲーム</td>
          </tr>
        </table>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.center}>サイトマップ</p>
        <p className={styles.cardText}>
          <b><Link to='/uchinoko'>うちのこ紹介</Link>：うちのこの紹介です。</b>
        </p>
        <p className={styles.cardText}>
        <b><Link to='/games'>作ったゲーム</Link>：作ったゲームの紹介です。</b>
        </p>
      </div>
    </section>
  );
}

export const query = graphql
`{
  pudding: file(relativePath: { eq: "gaming_pudding.png" }) {
    childImageSharp {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
    }
    }
  }
}`

export default HomePage

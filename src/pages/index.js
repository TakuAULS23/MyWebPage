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
        <table className={styles.cardText}>
          <tr>
            <td><b><Link to='/uchinoko'>うちのこ紹介</Link></b></td>
            <td><b>：うちのこの紹介です。</b></td>
          </tr>
          <tr>
            <td><b><Link to='/everydaygame'>うちのこの日常</Link></b></td>
            <td><b>：うちのこの日常を見ることができます。</b></td>
          </tr>
          <tr>
            <td><b><Link to='/games'>作ったゲーム</Link></b></td>
            <td><b>：作ったゲームの紹介です。</b></td>
          </tr>
        </table>
      </div>

      <div className={styles.cardContent}>
        <p className={styles.center}>プロフィール</p>
        <table className={styles.cardText}>
          <tr>
            <td>名前：</td>
            <td>タク</td>
          </tr>
          <tr>
            <td>趣味：</td>
            <td>お絵描き/音ゲー/ボードゲーム/リアル脱出ゲーム</td>
          </tr>
        </table>
      </div>

    </section>
  );
}

export const query = graphql
`{
  pudding: file(relativePath: { eq: "gaming_pudding.png" }) {
    childImageSharp {
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
    }
    }
  }
}`

export default HomePage

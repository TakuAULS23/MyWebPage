import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SubHeader from '../components/subHeader'
import styles from './uchinoko.module.css'
import Img from 'gatsby-image'

const UchinokoPages = ({ data }) => {
  return (
    <div>
      <Layout>
      <SubHeader
          title='うちのこ紹介'
          subTitle='画像をクリックするとPixivのページに飛びます。' />
        <Card
          image={data.cremBio.childImageSharp.fluid}
          link='https://www.pixiv.net/artworks/79137113' />
        <Card
          image={data.hanonBio.childImageSharp.fluid}
          link='https://www.pixiv.net/artworks/79285317' />
        <Card
          image={data.wafuyuBio.childImageSharp.fluid}
          link='https://www.pixiv.net/artworks/80225191' />
        <h3 className={styles.center}>
          注意事項
        </h3>
        <p className={styles.pad}>
          ※うちのこはご自由に描いていただいておっけーです。<br />
          ツイッター投稿の際はメンション(@+ID)を付けていただけると喜びます。
        </p>
        <h3 className={styles.center}>
          イラスト規約
        </h3>
        <p className={styles.pad}>
          R-18表現のイラストは常識の範囲内でお願いします。<br />
          迷った際はご一報いただけるとありがたいです。<br />
          R-18G表現(暴力を連想させる行為)を描くのはやめていただけると助かります。
        </p>
      </Layout>
    </div>
  )
}

const Card = ( props ) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardImg}>
        <Link to={props.link} target="_blank">
          <Img fluid={props.image} />
        </Link>
      </div>
    </section>
  );
}

export const query = graphql
`{
  cremBio: file(relativePath: { eq: "crem_bio.png" }) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  hanonBio: file(relativePath: { eq: "hanon_bio.png" }) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  wafuyuBio: file(relativePath: { eq: "wafuyu_bio.png" }) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

export default UchinokoPages
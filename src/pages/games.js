import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SubHeader from '../components/subHeader'
import styles from './games.module.css'
import Img from 'gatsby-image'

const GamesPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <SubHeader
          title='作ったゲーム'
          subTitle='画像をクリックするとゲームがプレイできるリンクに飛びます。' />
        <div className={styles.container}>
          <Card
            title='To Myself'
            subtitle='～記憶の私と記録のわたし～'
            image={data.tomyself.childImageSharp.fluid}
            link='https://novelgame.jp/games/show/1030'
            subtext='画像をクリックするとノベルゲームコレクション(外部リンク)に飛びます'
            text1='処女作、友人と２人で制作しました。'
            text2='ノベルゲーム×謎解きゲーム プレイ時間30分程度'
            text3='「ティラノゲームフェス2018」にて準グランプリを受賞させていただきました。' />
          <Card
            title='想い出のナツハナビ'
            image={data.natsuhanabi.childImageSharp.fluid}
            link='https://novelgame.jp/games/show/1082'
            subtext='画像をクリックするとノベルゲームコレクション(外部リンク)に飛びます'
            text1='東京にて開催されたノベルゲームジャム「ノアフェス２」にてチームを組み制作しました。'
            text2='選択肢なしのノベルゲーム フルボイスでプレイ時間10分程度'
            text3='「ノアフェス２」にて総合部門賞、さらに「ティラノゲームフェス2018」にて佳作を受賞させていただきました。' />
          <Card
            title='深淵サーバント'
            image={data.servant.childImageSharp.fluid}
            link='https://www.freem.ne.jp/win/game/19207'
            subtext='画像をクリックするとふりーむ！(外部リンク)に飛びます'
            text1='「サウンド」ホラーノベル プレイ時間2分程度'
            text2='※このゲームは音声が流れます。※' />
          <Card
            title='劇場版 VRアイドル戦記「チョロン☆めろん」'
            subtitle='～Heaven&#39;s Fall～'
            image={data.choron.childImageSharp.fluid}
            link='https://youtu.be/WheD6B0p9lQ?t=6228'
            subtext='画像をクリックするとYoutubeに飛びます'
            text1='大阪にて開催されたノベルゲームジャム「ノアフェス３」にて制作しました。'
            text2='パロネタ身内ネタ何でもありのアホゲー フルボイスでプレイ時間10分程度'
            text3='「ノアフェス３」にてオリジナリティ部門賞および音楽音声部門賞を受賞させていただきました。' />
        </div>
      </Layout>
    </div>
  )
}

const Card = ( props ) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>{ props.title }</div>
      <div className={styles.cardSubTitle}>{ props.subtitle }</div>
      <div className={styles.cardImg}>
        <Link to={props.link} target="_blank">
          <Img fluid={props.image} />
        </Link>
      </div>
      <div className={styles.cardSubText}>{ props.subtext }</div>
      <div className={styles.cardBorder}></div>
      <div className={styles.cardText}>{ props.text1 }</div>
      <div className={styles.cardText}>{ props.text2 }</div>
      <div className={styles.cardText}>{ props.text3 }</div>
    </section>
  );
}

export const query = graphql
`{
  tomyself: file(relativePath: { eq: "tomyself_title.png" }) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
    }
    }
  }
  natsuhanabi: file(relativePath: { eq: "natsuhanabi_title.png" }) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
    }
    }
  }
  servant: file(relativePath: { eq: "servant_title.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
    }
    }
  }
  choron: file(relativePath: { eq: "choron_title.png" }) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
    }
    }
  }
}`

export default GamesPage

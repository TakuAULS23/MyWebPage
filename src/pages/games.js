import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styles from './games.module.css'
import Img from 'gatsby-image'

const GamesPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <h2>作ったゲーム</h2>
        <div className={styles.container}>
          <Card
            title='To Myself'
            subtitle='～記憶の私と記録のわたし～'
            image={data.tomyself.childImageSharp.fixed}
            link='https://novelgame.jp/games/show/1030'
            text1='処女作、友人と２人で制作しました。'
            text2='ノベルゲーム×謎解きゲーム プレイ時間30分程度'
            text3='「ティラノゲームフェス2018」にて準グランプリを受賞させていただきました。' />
          <Card
            title='想い出のナツハナビ'
            image={data.natsuhanabi.childImageSharp.fixed}
            link='https://novelgame.jp/games/show/1082'
            text1='東京にて開催されたノベルゲームジャム「ノアフェス２」にてチームを組み制作しました。'
            text2='選択肢なしのノベルゲーム フルボイスでプレイ時間10分程度'
            text3='「ノアフェス２」にて総合部門賞、さらに「ティラノゲームフェス2018」にて佳作を受賞させていただきました。' />
          <Card
            title='深淵サーバント'
            image={data.servant.childImageSharp.fixed}
            link='https://www.freem.ne.jp/win/game/19207'
            text1='「サウンド」ホラーノベル プレイ時間2分程度'
            text2='※このゲームは音声が流れます。※' />
          <Card
            title='劇場版 VRアイドル戦記「チョロン☆めろん」'
            subtitle='～Heaven&#39;s Fall～'
            image={data.choron.childImageSharp.fixed}
            link='https://youtu.be/WheD6B0p9lQ?t=6228'
            subtext='Youtubeに飛びます'
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
          <Img fixed={props.image} />
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
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
    }
    }
  }
  natsuhanabi: file(relativePath: { eq: "natsuhanabi_title.png" }) {
    childImageSharp {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
    }
    }
  }
  servant: file(relativePath: { eq: "servant_title.jpg" }) {
    childImageSharp {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
    }
    }
  }
  choron: file(relativePath: { eq: "choron_title.png" }) {
    childImageSharp {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
    }
    }
  }
}`

export default GamesPage

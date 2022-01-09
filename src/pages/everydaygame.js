import React from "react"
import Layout from '../components/layout'
import SubHeader from '../components/subHeader'
import styles from './everydaygame.module.css'

const EverydayPages = ({ data }) => {
    return (
      <div>
        <Layout>
        <SubHeader
          title='うちのこの日常'
          subTitle='画面をクリックするとゲームが開始されます。' />
          <Card
            title='くりむちゃんの自己紹介'
            text1='※非常に重いです。クリックしてもスタートするのが遅い場合があります。'
            text2='初期設定はオートモードです。画面をクリックするとオートモードが解除されます。'
          />
        </Layout>
    </div>
  )
}

const Card = ( props ) => {
    return (
      <section className={styles.card}>
        <div className={styles.cardTitle}>{props.title}</div>
        <div className={styles.cardContent}>
            <iframe src="https://crem0401.netlify.app"
                    width="100%"
                    height="270px"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen>
            </iframe>
        </div>
        <div className={styles.cardText}>{props.text1}</div>
        <div className={styles.cardText}>{props.text2}</div>
      </section>
    );
  }

export default EverydayPages
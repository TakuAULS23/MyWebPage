import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const UchinokoPages = ({ data }) => {
  return (
    <div>
      <Layout>
        <h2>うちのこ紹介</h2>
        <p>
          <Link to='https://twitter.com/takuAULS/status/1255454782887780353'>
          <Img fixed={data.cremBio.childImageSharp.fixed} />
          </Link>
        </p>
        <p>
          <Link to='https://twitter.com/takuAULS/status/1255454782887780353'>
            <Img fixed={data.hanonBio.childImageSharp.fixed} />
          </Link>
        </p>
        <p>
          <Link to='https://twitter.com/takuAULS/status/1255454782887780353'>
            <Img fixed={data.wafuyuBio.childImageSharp.fixed} />
          </Link>
        </p>
        <h3>
          注意事項
        </h3>
        <p>
          ※うちのこはご自由に描いていただいておっけーです。<br />
          ツイッター投稿の際はメンション(@+ID)を付けていただけると喜びます。
        </p>
        <h3>
          イラスト規約
        </h3>
        <p>
          R-18表現のイラストは常識の範囲内でお願いします。<br />
          迷った際はご一報いただけるとありがたいです。<br />
          R-18G表現(暴力を連想させる行為)を描くのはやめていただけると助かります。
        </p>
      </Layout>
    </div>
  )
}

export const query = graphql
`{
  cremBio: file(relativePath: { eq: "crem_bio.png" }) {
    childImageSharp {
      fixed(width: 500) {
        ...GatsbyImageSharpFixed
    }
    }
  }
  hanonBio: file(relativePath: { eq: "hanon_bio.png" }) {
    childImageSharp {
    fixed(width: 500) {
        ...GatsbyImageSharpFixed
    }
    }
  }
  wafuyuBio: file(relativePath: { eq: "wafuyu_bio.png" }) {
    childImageSharp {
    fixed(width: 500) {
        ...GatsbyImageSharpFixed
    }
    }
  }
}`

export default UchinokoPages
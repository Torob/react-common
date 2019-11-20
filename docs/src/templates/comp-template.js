import React from "react"
import { graphql } from "gatsby"
import { Providers } from "../../../src"
import Layout from "../components/layout"
export default ({ data, location }) => {
  console.log(location)
  const post = data.markdownRemark
  return (
    <Providers.AuthProvider>
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </Providers.AuthProvider>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

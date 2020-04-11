import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { PageComponent } from "../types"
import SEO from "../components/SEO"

const BlogPost: PageComponent = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <div className="blog-post-container">
      {/* <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
       */}
       <SEO post={post} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default BlogPost;
export { pageQuery }

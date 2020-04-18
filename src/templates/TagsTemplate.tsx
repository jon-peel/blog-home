import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import { PageComponent } from "../types"
import PostSummary from "../components/PostSummary";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BlogPostIndex from "../atoms/BlogPostIndex";
import PageHeading from "../styles/PageHeading";

type Props = {pageContext: { tag: string }};

const TagsTemplate: PageComponent<GatsbyTypes.TagsQuery, Props> = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${tag}"`

  return (
    <Layout>
			<SEO />
			<BlogPostIndex>
				<h2>{tag}</h2>
				{edges.map(({ node }) => (
					<PostSummary key={node.id} node={node} />
				))}
			</BlogPostIndex>
		</Layout>
  );
}

const pageQuery = graphql`
  query Tags($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
				node {
					excerpt(pruneLength: 250)
					id
					fileAbsolutePath
					frontmatter {
						title
						date(formatString: "DD MMMM YYYY")
						path
						tags
					}
				}
			}
    }
  }
`

export default TagsTemplate;
export { pageQuery };
import React from 'react';
import { graphql } from 'gatsby';
import { PageComponent } from '../types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PostSummary from '../components/PostSummary';
import BlogPostIndex from '../atoms/BlogPostIndex';

const Index: PageComponent<GatsbyTypes.IndexQuery> = ({ data }) => {
	const { edges } = data.allMarkdownRemark;
	const posts = edges.filter((post) => !!post.node.frontmatter?.title?.length);

	return (
		<Layout>
			<SEO />
			<BlogPostIndex>
				{posts.map(({ node }) => (
					<PostSummary key={node.id} node={node} />
				))}
			</BlogPostIndex>
		</Layout>
	);
};

const pageQuery = graphql`
	query Index {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { fileAbsolutePath: { regex: "//posts//" } }
		) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					fileAbsolutePath
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						slug
						tags
					}
				}
			}
		}
	}
`;

export default Index;
export { pageQuery };

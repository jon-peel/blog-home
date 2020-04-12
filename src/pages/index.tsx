import React from 'react';
import { graphql } from 'gatsby';
import { StaticPageComponent } from '../types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PostSummary from '../components/PostSummary';

const Index: StaticPageComponent = ({ data }) => {
	const { edges } = data.allMarkdownRemark;
	const posts = edges.filter((post) => post.node.frontmatter.title.length > 0);

	return (
		<Layout data={data}>
			<SEO />
			{posts.map(({ node }) => (
				<PostSummary key={node.id} post={node} />
			))}
		</Layout>
	);
};

const pageQuery = graphql`
	query IndexQuery {
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
						path
						tags
					}
				}
			}
		}
	}
`;

export default Index;
export { pageQuery };

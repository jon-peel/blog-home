import React from 'react';
import { graphql } from 'gatsby';
import { StaticPageComponent } from '../types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PostSummary from '../components/PostSummary';

const Index: StaticPageComponent = ({ data }) => {
	const { edges: posts } = data.allMarkdownRemark;
	return (
		<Layout>
			<SEO />
			{posts
				.filter((post) => post.node.frontmatter.title.length > 0)
				.map(({ node }) => (
					<PostSummary key={node.id} post={node} />
				))}
		</Layout>
	);
};

const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
					}
				}
			}
		}
	}
`;

export default Index;
export { pageQuery };

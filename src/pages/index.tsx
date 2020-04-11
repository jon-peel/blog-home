import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticPageComponent } from '../types';
import SEO from '../components/SEO';

// import '../css/index.css'; // add some style if you want!

 const Index: StaticPageComponent = ({ data }) => {
	const { edges: posts } = data.allMarkdownRemark;
	return (
		<div className="blog-posts">
			<SEO />
			{posts
				.filter((post) => post.node.frontmatter.title.length > 0)
				.map(({ node: post }) => {
					return (
						<div className="blog-post-preview" key={post.id}>
							<h1>
								<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
							</h1>
							<h2>{post.frontmatter.date}</h2>
							<p>{post.excerpt}</p>
						</div>
					);
				})}
		</div>
	);
}

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
export {pageQuery};

import React from 'react';
import { graphql } from 'gatsby';
import { PageComponent } from '../types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Tags from '../components/Tags';

const BlogPost: PageComponent = ({ data }) => {
	const { markdownRemark: post } = data;
	return (
		<Layout>
			<SEO post={post} />
			<article className="blog-post">
				<h1>{post.frontmatter.title}</h1>
				<Tags post={post} />
				<section dangerouslySetInnerHTML={{ __html: post.html }} />
			</article>
		</Layout>
	);
};

const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				tags
			}
		}
	}
`;

export default BlogPost;
export { pageQuery };

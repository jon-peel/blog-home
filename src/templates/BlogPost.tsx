import React, { FC } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Tags from '../components/Tags';
import { PageComponent } from '../types';

const BlogPost: PageComponent<GatsbyTypes.BlogPostByPathQuery> = ({ data }) => {
	const { markdownRemark: post } = data;
	const __html = post?.html ?? '';

	return (
		<Layout>
			<SEO data={data} />
			<article className="blog-post">
				<h1>{post?.frontmatter?.title}</h1>
				<Tags tags={post?.frontmatter?.tags} />
				<section dangerouslySetInnerHTML={{ __html }} />
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

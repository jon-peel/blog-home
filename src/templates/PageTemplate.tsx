import React, { FC } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Tags from '../components/Tags';
import { PageComponent } from '../types';
import { DiscussionEmbed } from "disqus-react"


const PageTemplate: PageComponent<GatsbyTypes.PageQuery> = ({ data }) => {
	const { markdownRemark: post } = data;
	
	const __html = post?.html ?? '';

	return (
		<Layout>
			<SEO data={data} />
			<article>
				<h1>{post?.frontmatter?.title}</h1>
				<Tags tags={post?.frontmatter?.tags} />
				<section dangerouslySetInnerHTML={{ __html }} />
			</article>
		</Layout>
	);
};

const pageQuery = graphql`
	query Page($path: String!) {
		markdownRemark(frontmatter: { slug: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				tags
			}
		}
	}
`;

export default PageTemplate;
export { pageQuery };

import React, { FC } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { PageComponent } from '../types';

const PageTemplate: PageComponent<GatsbyTypes.PageQuery> = ({ data }) => {
	const { markdownRemark: post } = data;
	const __html = post?.html ?? '';

	return (
		<Layout>
			<SEO data={data} />
			<main>
			<article>
				<h2>{post?.frontmatter?.title}</h2>
				<main dangerouslySetInnerHTML={{ __html }} />
			</article>
			</main>
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

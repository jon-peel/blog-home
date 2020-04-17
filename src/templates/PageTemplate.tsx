import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { PageComponent } from '../types';

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const shortcodes = { Link }

const PageTemplate: FC = ({ children }) => {
	// const { mdx } = data;
	// const __html = post?.html ?? '';
	debugger;
	return (
		<Layout>
			{/* <SEO data={mdx as any} /> */}
			<main>
			<article>
				{/* <h2>{mdx?.frontmatter?.title}</h2> */}
				{/* <MDXProvider components={shortcodes}>
        	<MDXRenderer>{mdx!.body}</MDXRenderer>
      	</MDXProvider> */}
				{/* <main dangerouslySetInnerHTML={{ __html }} /> */}
			{children}
			</article>
			</main>
		</Layout>
	);
};

const pageQuery = graphql`
	query Page($path: String!) {
		mdx(frontmatter: { slug: { eq: $path } }) {
			body
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

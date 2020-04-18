import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Tags from '../components/Tags';
import { PageComponent } from '../types';
import { DiscussionEmbed } from "disqus-react"

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const shortcodes = { Link }

const BlogPostTemplate: PageComponent<GatsbyTypes.BlogPostQuery> = ({ data }) => {
	const { mdx } = data;
	const disqusConfig = {
		shortname: process.env.GATSBY_DISQUS_NAME!,
		config: { identifier: mdx?.frontmatter?.path!, title: mdx?.frontmatter?.title!, url: '' },
	};
	// const __html = post?.html ?? '';

	const date = new Date(mdx?.frontmatter!.date!);
	return (
		<Layout>
			<SEO data={data} />
			<article>
				<h2>{mdx?.frontmatter?.title}</h2>
				 <time title={date.toISOString()}>{mdx?.frontmatter?.date}</time>
				<Tags tags={mdx?.frontmatter?.tags} />
				<MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx!.body}</MDXRenderer>
      </MDXProvider>
				{/* <main dangerouslySetInnerHTML={{ __html }} /> */}
				<DiscussionEmbed {...disqusConfig} />
			</article>
		</Layout>
	);
};

const pageQuery = graphql`
	query BlogPost($path: String!) {
		mdx(frontmatter: { path: { eq: $path } }) {
			body
			frontmatter {
				date
				path
				title
				tags
			}
		}
	}
`;

export default BlogPostTemplate;
export { pageQuery };

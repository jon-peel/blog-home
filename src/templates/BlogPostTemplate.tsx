import { Link, graphql } from 'gatsby';
import React, { FC } from 'react';

import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/Layout';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PageComponent } from '../types';
import SEO from '../components/SEO';
import Tags from '../components/Tags';

const shortcodes = { Link }

const BlogPostTemplate: PageComponent<GatsbyTypes.BlogPostQuery> = ({ data }) => {
	const { mdx } = data;
	const disqusConfig = {
			identifier: mdx!.frontmatter!.path!,
			title: mdx!.frontmatter!.title,
			url:  `https://www.jonathanpeel.co.za/${mdx!.frontmatter!.path}`,
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
				<DiscussionEmbed shortname="jonathan-co-za" config={disqusConfig} />
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

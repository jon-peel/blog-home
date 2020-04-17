import React, { FC } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const query = graphql`
	query Nav {
		pages: allMdx(
			filter: { fileAbsolutePath: { regex: "//pages//" } }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						slug
					}
				}
			}
		}
	}
`;

const PagesNav: FC = () => {
	const pages = useStaticQuery<GatsbyTypes.NavQuery>(query)
		.pages.edges.map(
			(page) => page.node.frontmatter //as GatsbyTypes.Mdx .MarkdownRemarkFrontmatter
		)
		.filter((page) => page?.title?.length);
	return (
		<>
			{pages.map((page) => (
				<>
					<h4><Link to={page!.slug as string}>{page!.title}</Link></h4>
				</>
			))}
		</>
	);
};

export default PagesNav;

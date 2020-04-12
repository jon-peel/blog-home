import React, { FC } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const query = graphql`
	query Nav {
		pages: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "//pages//" } }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						path
					}
				}
			}
		}
	}
`;

const Nav: FC = () => {
	const pages = useStaticQuery<GatsbyTypes.NavQuery>(query)
		.pages.edges.map(
			(page) => page.node.frontmatter as GatsbyTypes.MarkdownRemarkFrontmatter
		)
		.filter((page) => page?.title?.length);
	return (
		<nav>
			{pages.map((page) => (
				<>
					<Link to={page.path as string}>{page.title}</Link>
					&nbsp;
				</>
			))}
		</nav>
	);
};

export default Nav;

import { graphql, useStaticQuery } from "gatsby";

type SiteQuery = Readonly<{
	site:{siteMetadata: {
		title: string,
		description: string,
		author: string,
	}}	
}>;

const siteQuery = graphql`
query {
	site {
		siteMetadata {
			title
			description
			author
		}
	}
}
`;

const useSiteQuery = () => useStaticQuery<SiteQuery>(siteQuery);

export default useSiteQuery;

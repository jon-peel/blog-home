/* eslint-disable @typescript-eslint/camelcase */

const maxWidth = 800;

module.exports = {
	siteMetadata: {
		title: `Jonathan Peel`,
		description: `Homepage and blog of Jonathan Peel.`,
		author: `Jonathan Peel`,
		siteUrl: `https://www.jonathanpeel.co.za/`,
	},
	plugins: [
		{
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "UA-45738241-6" },
		},
		{
      resolve: `gatsby-plugin-disqus`,
      options: { shortname: `jonathan-co-za` }
    },
		`gatsby-plugin-netlify`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-typegen`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-remark-images`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Roboto\:ital,400,400i,700`,
					`source sans pro\:400,400i,700`,
					`Lobster Two\:700`,
				],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
				{
					site {
						siteMetadata {
							title
							description
							siteUrl
							site_url: siteUrl
						}
					}
				}
			`,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.edges.map(({node}) => {
								const {excerpt: description, frontmatter} = node;
								const {date, path} = frontmatter;
								const url = site.siteMetadata.siteUrl + path;
								return Object.assign({}, frontmatter, {
									description,
									date,
									url,
									guid: url,
									copyright: '2020, Jonathan Peel',
								});
							});
						},
						query: `
						{
							allMdx(
								sort: { order: DESC, fields: [frontmatter___date] },
							) {
								edges {
									node {
										excerpt
										frontmatter {
											title
											date
											path
										}
									}
								}
							}
						}
					`,
						output: '/rss.xml',
						title: "Jonathan Peel's RSS Feed",
					},
				],
			},
		},
	],

};

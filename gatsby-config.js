/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
	siteMetadata: {
		title: `Jonathan Peel`,
		description: `Homepage and blog of Jonathan Peel.`,
		author: `Jonathan Peel`,
		siteUrl: `https://priceless-neumann-8e4227.netlify.com/`,
	},
	plugins: [
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
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map((edge) => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									date: edge.node.frontmatter.date,
									url: site.siteMetadata.siteUrl + edge.node.fields.slug,
									guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
									custom_elements: [{ 'content:encoded': edge.node.html }],
									copyright: '2020, Jonathan Peel',
								});
							});
						},
						query: `
						{
							allMarkdownRemark(
								filter: { fileAbsolutePath: { regex: "//posts//" } },
								sort: { order: DESC, fields: [frontmatter___date] },
							) {
								edges {
									node {
										excerpt
										html
										fields { slug }
										frontmatter {
											title
											date
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
		`gatsby-plugin-netlify`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-typegen`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-react-helmet`,
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
			resolve: 'gatsby-transformer-remark',
			options: { plugins: [] },
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
        display: 'swap'
      }
    },

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};

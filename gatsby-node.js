const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const BlogPostTemplate = path.resolve(`src/templates/BlogPostTemplate.tsx`);
	const PageTemplate = path.resolve(`src/templates/PageTemplate.tsx`);
	const TagsTemplate = path.resolve(`src/templates/TagsTemplate.tsx`);

	const result = await graphql(`
		{
			postsRemark: allMdx(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
			tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	result.data.postsRemark.edges.forEach(({ node }) => {
		const component = node.frontmatter.slug && node.frontmatter.slug.startsWith('/posts/') && BlogPostTemplate; // : PageTemplate;
		if (component)
		createPage({
			path: node.frontmatter.slug,
			component,
			context: {},
		});

		result.data.tagsGroup.group.forEach(tag => {
			createPage({
				path: `/tags/${tag.fieldValue}/`,
				component: TagsTemplate,
				context: {
					tag: tag.fieldValue,
				},
			});
		});
	});
	
};


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
import React, { FC } from 'react';
import { Link } from 'gatsby';
import Tags from './Tags';

type Node =  GatsbyTypes.IndexQuery['allMarkdownRemark']['edges'][0]['node'];

type Props = { node: Node };

const PostSummary: FC<Props> = ({ node }) => (
	<article className="blog-post-preview">
		<h2>
		{node.frontmatter?.path && 
			<Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
		}
		</h2>
		{node.frontmatter?.date && <h3>{node.frontmatter?.date}</h3>}
		<Tags tags={node.frontmatter?.tags} />
		<p>{node.excerpt}</p>
	</article>
);

export default PostSummary;

import React, { FC } from 'react';
import { Link } from 'gatsby';
import Tags from './Tags';

type Node =  GatsbyTypes.IndexQuery['allMarkdownRemark']['edges'][0]['node'];

type Props = { node: Node };

const PostSummary: FC<Props> = ({ node }) => (
	<article className="blog-post-preview">
		<h3>
		{node.frontmatter?.slug && 
			<Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
		}
		</h3>
		{node.frontmatter?.date && <h4>{node.frontmatter?.date}</h4>}
		<Tags tags={node.frontmatter?.tags} />
		<p>{node.excerpt}</p>
	</article>
);

export default PostSummary;

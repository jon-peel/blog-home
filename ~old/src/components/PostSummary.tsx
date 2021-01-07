import React, { FC } from 'react';
import { Link } from 'gatsby';
import Tags from './Tags';
import ReadMore from '../styles/ReadMore';

type Node = GatsbyTypes.IndexQuery['allMdx']['edges'][0]['node'];

type Props = { node: Node };

const PostSummary: FC<Props> = ({ node }) => {
	const to = node.frontmatter?.path ?? '/';
	const date = new Date(node.frontmatter!.date!);
	return (
		<article>
			<h3>
				<Link to={to}>{node.frontmatter?.title}</Link>
			</h3>
			<time title={date.toISOString()}>{node.frontmatter?.date}</time>
			<Tags tags={node.frontmatter?.tags} />
			<main>{node.excerpt}</main>
			<ReadMore to={to} />
		</article>
	);
};

export default PostSummary;

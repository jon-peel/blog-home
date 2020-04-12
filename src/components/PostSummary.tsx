import React, { FC } from 'react';
import { Post } from '../types';
import { Link } from 'gatsby';
import Tags from './Tags';

type Props = { post: Post };

const PostSummary: FC<Props> = ({ post }) => (
	<article className="blog-post-preview">
		<h2>
			<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
		</h2>
		<h3>{post.frontmatter.date}</h3>
		<Tags post={post} />
		<p>{post.excerpt}</p>
	</article>
);

export default PostSummary;

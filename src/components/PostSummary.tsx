import React, { FC } from 'react';
import { Post } from '../types';
import { Link } from 'gatsby';

type Props = { post: Post };

const PostSummary: FC<Props> = ({ post }) => (
	<article className="blog-post-preview">
		<h1>
			<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
		</h1>
		<h2>{post.frontmatter.date}</h2>
		<p>{post.excerpt}</p>
	</article>
);

export default PostSummary;

import React, { FC } from 'react';
import { Post } from '../types';

type Props = { post: Post };

const Tags: FC<Props> = ({post}) => (
	<ul>
		{post.frontmatter.tags.map(t => <li key={t}>{t}</li>)}
	</ul>
);

export default Tags;
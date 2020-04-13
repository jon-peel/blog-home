import React, { FC } from 'react';
import TagList from '../styles/TagList';

type Props = { tags: GatsbyTypes.Maybe<readonly (string | undefined)[]> };

const Tags: FC<Props> = ({ tags }) =>
	tags ? (
		<TagList>
			{tags
			.filter(t => !!t)
			.map((t) => (
				<li key={t}><small>{t}</small></li>
			))}
		</TagList>
	) : null;

export default Tags;

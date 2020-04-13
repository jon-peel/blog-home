import React, { FC } from 'react';
import TagList from '../styles/TagList';
import { Link } from 'gatsby';

type Props = { tags: GatsbyTypes.Maybe<readonly (string | undefined)[]> };

const Tags: FC<Props> = ({ tags }) =>
	tags ? (
		<TagList>
			{tags
			.filter(t => !!t)
			.map((t) => (
				<li key={t}><small><Link to={`/tags/${t}`}>{t}</Link></small></li>
			))}
		</TagList>
	) : null;

export default Tags;

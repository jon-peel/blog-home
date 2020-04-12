import React, { FC } from 'react';

type Props = { tags: GatsbyTypes.Maybe<readonly (string | undefined)[]> };

const Tags: FC<Props> = ({ tags }) =>
	tags ? (
		<ul>
			{tags
			.filter(t => !!t)
			.map((t) => (
				<li key={t}>{t}</li>
			))}
		</ul>
	) : null;

export default Tags;

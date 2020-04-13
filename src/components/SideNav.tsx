import React, { FC } from 'react';
import Nav from './Nav';

const SideNav: FC = () => (
	<aside style={{gridArea: 'side'}}>
		<Nav />
		<a rel="feed" href="/rss.xml">RSS</a>
	</aside>
);

export default SideNav;
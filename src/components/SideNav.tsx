import React from 'react';
import SiteTags from './SiteTags';
import PagesNav from './PagesNav';
import styled from 'styled-components';

const SideNav = styled.aside.attrs({
	children: (<>
		<nav>
		<PagesNav />
		<SiteTags />
		<h4><a rel="feed" href="/rss.xml" target="_blank">RSS</a></h4>
		</nav>
	</>)
})`
	grid-area: side;
	padding-top: 100px;
	background: white;
`;


export default SideNav;
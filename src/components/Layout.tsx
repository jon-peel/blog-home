import React, { FC } from 'react';
import Nav from './PagesNav';
import { Link } from 'gatsby';
import SkipLink from '../atoms/SkipLink';
import Licence from './Licence';

import GlobalStyle from '../styles/GlobalStyle';
import SideNav from './SideNav';

const Layout: FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<SkipLink href="#main">Skip to main content</SkipLink>
			<SideNav />
			<header>
				<h1><Link to="/">Jonathan Peel</Link></h1>
			</header>
			<main id="main">{children}</main>
			<footer>
				<Licence />
				<div>
				&copy; 2020, Jonathan Peel
				</div>
			</footer>
		</>
	);
};

export default Layout;

import React, { FC } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import SkipLink from '../atoms/SkipLink';
import Licence from './Licence';

import GlobalStyle from '../styles/GlobalStyle';

const Layout: FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<SkipLink href="#main">Skip to main content</SkipLink>
			<header>
				<Link to="/"><h1>Jonathan Peel</h1></Link>
				<section>
					<Nav />
					<a rel="feed" href="/rss.xml">RSS</a>
				</section>
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

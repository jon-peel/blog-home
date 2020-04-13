import React, { FC } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import SkipLink from '../atoms/SkipLink';
import Licence from './Licence';

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		padding: 0;
		background: white;
    color: black;
		font-family: 'Courier New', Courier, monospace;
  }

	header, footer {
		display: flex;
		justify-content: space-between;
    align-items: baseline;

		section {display: flex; justify-content: flex-end; }
	}

	h1 { margin: 0 }

	footer { background: darkgray; color: black; font-size: smaller; }
`;

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

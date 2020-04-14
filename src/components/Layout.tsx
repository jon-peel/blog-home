import React, { FC } from 'react';
import { Link } from 'gatsby';
import SkipLink from '../atoms/SkipLink';
import Licence from './Licence';

import GlobalStyle from '../styles/GlobalStyle';
import SideNav from './SideNav';
import styled from 'styled-components';

const Amp = styled.strong.attrs({children: <>&amp;</>})`font-family: 'Lobster Two', cursive;`;

const Layout: FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<SkipLink href="#main">Skip to main content</SkipLink>
			<SideNav />
			<header>
				<h1><Link to="/">Dev <Amp /> Stuff</Link></h1>
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

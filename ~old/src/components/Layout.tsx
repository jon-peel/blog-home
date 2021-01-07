import React, { FC } from 'react';
import { Link } from 'gatsby';

import SkipLink from '../atoms/SkipLink';
import GlobalStyle from '../styles/GlobalStyle';
import SideNav from './SideNav';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './Footer';
import HeaderBack from '../styles/HeaderBack';
import theme from '../styles/theme';

type Props = { index?: boolean }

const Amp = styled.strong.attrs({children: <>&amp;</>})`font-family: 'Lobster Two', cursive;`;

const Layout: FC<Props> = ({ children, index }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle index={index} />
			<SkipLink href="#main">Skip to main content</SkipLink>
			<SideNav />
			<HeaderBack />
			<header>
				<h1><Link to="/">Dev <Amp /> Stuff</Link></h1>
			</header>
			<main id="main">{children}</main>
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;

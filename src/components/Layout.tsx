import React, { FC } from 'react';
import { Link } from 'gatsby';

import SkipLink from '../atoms/SkipLink';
import GlobalStyle from '../styles/GlobalStyle';
import SideNav from './SideNav';
import styled from 'styled-components';
import Footer from './footer';
import HeaderBack from '../styles/HeaderBack';

type Props = { index?: boolean }

const Amp = styled.strong.attrs({children: <>&amp;</>})`font-family: 'Lobster Two', cursive;`;

const Layout: FC<Props> = ({ children, index }) => {
	return (
		<>
			<GlobalStyle index={index} />
			<SkipLink href="#main">Skip to main content</SkipLink>
			<SideNav />
			<HeaderBack />
			<header>
				<h1><Link to="/">Dev <Amp /> Stuff</Link></h1>
			</header>
			<main id="main">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;

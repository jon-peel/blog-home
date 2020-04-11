import React, { FC } from 'react';

const Layout: FC = ({ children }) => (
	<>
		<main>{children}</main>
		<footer>&copy; 2020, Jonathan Peel</footer>
	</>
);

export default Layout;

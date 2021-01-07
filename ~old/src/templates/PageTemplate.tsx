import React, { FC } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';


const PageTemplate: FC = ({ children }) => {
	debugger;
	return (
		<Layout>
			<SEO />
			<main>
				<article>
					{children}
				</article>
			</main>
		</Layout>
	);
};

export default PageTemplate;

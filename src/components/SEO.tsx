import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import useSiteQuery from '../hooks/useSiteQuery';
import type { Post } from '../types';

type Props = { post?: Post };

const lang = 'en';

const meta = (metaName: TemplateStringsArray) => (metaContent: TemplateStringsArray | string) => {
	const name = metaName[0];
	const content = typeof metaContent === 'string' ? metaContent : metaContent[0];
	return {name, content};
};

const SEO: FC<Props> = ({post}) => {
	const { site } = useSiteQuery();
	const title = post?.frontmatter.title ?? site.siteMetadata.title;
	const metaDescription = '' || site.siteMetadata.description;

	return (
			<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			// titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				meta`descriptionn`(metaDescription),
				meta`og:title`(title),
				meta`og:description`(metaDescription),
				meta`og:type``website`,
				meta`twitter:card``summary`,
				meta`twitter:creator`(site.siteMetadata.author),
				meta`twitter:title`(title),
				meta`twitter:description`(metaDescription),
			]}
			/>
	);
}



			
export default SEO;

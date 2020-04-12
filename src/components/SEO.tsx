import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import useSiteQuery from '../hooks/useSiteQuery';

type Props = { data?: GatsbyTypes.BlogPostQuery ; title?: string };

const lang = 'en';

const meta = (metaName: TemplateStringsArray) => (
	metaContent: TemplateStringsArray | string
) => {
	const name = metaName[0];
	const content =
		typeof metaContent === 'string' ? metaContent : metaContent[0];
	return { name, content };
};

const SEO: FC<Props> = ({ data, title }) => {
	const { site } = useSiteQuery();
	const pageTitle = title ?? data?.markdownRemark?.frontmatter?.title ?? site.siteMetadata.title;
	const metaDescription = '' || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={pageTitle}
			// titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				meta`descriptionn`(metaDescription),
				meta`og:title`(pageTitle),
				meta`og:description`(metaDescription),
				meta`og:type``website`,
				meta`twitter:card``summary`,
				meta`twitter:creator`(site.siteMetadata.author),
				meta`twitter:title`(pageTitle),
				meta`twitter:description`(metaDescription),
			]}
		>
			<link rel="feed" type="application/rss+xml" title="RSS feed" href="/rss.xml" />
		</Helmet>
	);
};

export default SEO;

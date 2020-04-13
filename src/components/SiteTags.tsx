import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TagList from '../styles/TagList';
import Tags from './Tags';

const tagQuery = graphql`
query SiteTags {
	allMarkdownRemark(limit: 2000) {
		group(field: frontmatter___tags) {
			fieldValue
		}
	}
}
`

const SiteTags = () => {
	const tags = useStaticQuery<GatsbyTypes.SiteTagsQuery>(tagQuery).allMarkdownRemark.group.map(t => t.fieldValue);
	return (<section><h4>Tags</h4><Tags tags={tags} /></section>);
}

export default SiteTags;
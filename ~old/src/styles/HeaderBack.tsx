import styled from 'styled-components';
import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Image = styled(BackgroundImage)`
	background-size: cover;
	background-position-y: center;
	position: fixed;
	width: 100%;
	height: 400px;
`;

const query = graphql`
query BackgroundImage {
	desktop: file(relativePath: { eq: "back.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
			}
			
		}
	mobile: file(relativePath: { eq: "back.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
			}
			
		}
	}
`;



const BackgroundSection = () => {
	const data = useStaticQuery<GatsbyTypes.BackgroundImageQuery>(query)!;
	const sources = [
    data.mobile!.childImageSharp!.fluid,
    {
      ...data.desktop!.childImageSharp!.fluid,
      media: `(min-width: 1024px)`,
    },
  ]
	return (
		<Image fluid={sources as any} className="inner-image" style={{}} />
	);
};

const HeaderBack = styled.div.attrs({ children: <BackgroundSection /> })`
	grid-area: head;
	position: relative;
	z-index: -1;

	.inner-image {
		position: fixed !important;
	}
`;

export default HeaderBack;

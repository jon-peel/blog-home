import styled from 'styled-components';
import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

// type Props = { images: Array<GatsbyTypes.BackgroundImageQuery['desktop']['childImageSharp']['a']> };


/* ${(p: Props) => p.images.map(i => `
		@media (max-width: ${i.presentationWidth}px) { background-image: url('${i.base64}') }
	`)} */

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


const Image = styled(BackgroundImage)`
	background-size: cover;
	background-position-y: center;
	position: absolute;
	width: 100%;
	height: 400px;
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
		<Image fluid={sources as any} className="innerImage" style={{position: 'absolute'}} />
	);
};

// import back from '../images/back.jpg';



const HeaderBack = styled.div.attrs({ children: <BackgroundSection /> })`
	grid-area: head;
	position: relative;
	z-index: -1;
`;

export default HeaderBack;

import styled from 'styled-components';
import React from 'react';

import back from '../images/back.jpg';

const Image = styled.div`
	background-image: url(${back});
	background-size: cover;
	background-position-y: center;
	position: absolute;
	width: 100%;
	height: 400px;
	
`;

const HeaderBack = styled.div.attrs({children: <Image />})`
	grid-area: head;
	position: relative;
	z-index: -1;
`;

export default HeaderBack;
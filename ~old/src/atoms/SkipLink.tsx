import styled from 'styled-components';

const SkipLink = styled.a`
	background: #319795;
	color: #fff;
	font-weight: 700;
	left: 50%;
	padding: 4px;
	position: absolute;
	transform: translateY(-100%);
	transition: transform 0.3s;

	:focus {
		transform: translate(0%);
	}
`;

export default SkipLink;

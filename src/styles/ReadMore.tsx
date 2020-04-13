import styled from "styled-components";
import { Link } from "gatsby";

const ReadMore = styled(Link).attrs({ children: 'Read More' })`
	text-transform: uppercase;
	float: right;
	padding: 8px;
	font-weight: bold;
`;

export default ReadMore;
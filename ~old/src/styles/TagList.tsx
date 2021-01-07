import styled from 'styled-components';

const TagList = styled.ul`
	list-style: none;
	display: flex;

	li {
		margin: 0 10px 0 5px;
		position: relative;
		display: inline-block;
		font-weight: 100;
		background: ${(p) => p.theme.accent};
		color: #f3f3f3;
		transition: background 0.3s;
		padding-left: 1px;
		padding-right: 3px;
		height: 16px;
		font-size: smaller;

		a {
			color: #f3f3f3;
		}

		&::before {
			position: absolute;
			content: '';
			left: -9px;
			width: 1px;
			height: 0px;
			border-right: 8px solid ${(p) => p.theme.accent};
			border-top: 8px solid transparent;
			border-bottom: 8px solid transparent;
			transition: border 0.7s;
		}
	}
`;

export default TagList;

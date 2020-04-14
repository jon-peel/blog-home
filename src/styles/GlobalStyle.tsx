import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme';

type Props = { index?: boolean; theme: Theme };

const grid = css`
	display: -ms-grid;
	display: grid;

	grid:
		'head'
		'main'
		'side'
		'foot';

	@media (min-width: ${(p) => p.theme.breakpoints[1]}px) {
		grid:
			'side head'
			'side main'
			'side foot'
			/ 184px auto;
	}

	@media (min-width: ${(p) => p.theme.breakpoints[2]}px) {
		grid:
			'side head'
			'side main'
			'side foot'
			/ 284px auto;
	}
`;

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; }
	
  a, h4 { color: ${(p) => p.theme.accent}; text-decoration: none; }

	body {
		background: ${(p) => p.theme.background};
		color: black;		
		font-family: 'Roboto', sans-serif;
		font-size: 15px;
  }

	header { grid-area: head }
	footer { grid-area: foot }

	header {
		min-height: ${(p: Props) => (p.index ? '200px' : '0')};
	}

	h1 { 
		margin: ${(p: Props) => (p.index ? '100px auto 0' : 'auto 0')};
		font-size: 45px;
		text-align: center;
	}

	h1, h2, h3 { margin-bottom: 8px; }

	h3 { 
		font-size: 22px;
		a { color: black; } 
	}

	h4 { text-transform: uppercase; }

	time { color: ${(p) => p.theme.subtle}; font-size: 15px; }

	footer { 
		color: black;
		font-size: smaller;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;

		& > * { margin: 18px; }
	}

	main {
		grid-area: main;
		margin: 0 auto;
	}

	aside { nav { & > * { display: block; border-bottom: 1px solid ${(p) =>
		p.theme.accent}; padding: 10px; } } }

	article { 
		box-sizing: border-box;
		background: white; 
		padding: 30px 40px;
		margin: 0 auto 16px;
		
		main {
			margin: 30px 0;
		}

		max-width: 100%;

		@media (min-width: ${(p) => p.theme.breakpoints[0]}px) {
			width: 590px;
		}

		@media (min-width: ${(p) => p.theme.breakpoints[1]}px) {
			width: 540px;
		}

		@media (min-width: ${(p) => p.theme.breakpoints[2]}px) {
			width: 620px;
		}

		@media (min-width: ${(p) => p.theme.breakpoints[3]}px) {
			width: 890px;
		}
	}

	#gatsby-focus-wrapper { 
		${grid};
	}
`;

export default GlobalStyle;

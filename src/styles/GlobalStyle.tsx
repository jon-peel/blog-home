import { createGlobalStyle, css } from "styled-components";

type Props = { index?: boolean }

const grid = css`
	display: -ms-grid;
	display: grid;
	grid:
		"side head"
		"side main"
		"side foot"
		/ 284px auto;
`;

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; }
	
  a, h4 { color: #d80b0b; text-decoration: none; }

	body {
		background: #e7e7e7;
		color: black;		
		font-family: 'Roboto', sans-serif;
		font-size: 15px;
  }

	header { grid-area: head }
	footer { grid-area: foot }

	header {
		min-height: ${(p: Props) => p.index ? '200px' : '0' };
	}

	h1 { 
		margin: ${(p: Props) => p.index ? '100px auto 0' : 'auto 0'};
		font-size: 45px;
		text-align: center;
	}

	h1, h2, h3 { margin-bottom: 8px; }

	h3 { 
		font-size: 22px;
		a { color: black; } 
	}

	h4 { text-transform: uppercase; }

	time { color: #4d4d4d; font-size: 15px; }

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

	aside { nav { & > * { display: block; border-bottom: 1px solid #d80b0b; padding: 10px; } } }

	article { width: 890px; }

	article { 
		background: white; 
		padding: 30px 40px;
		margin: 0 auto 16px;
		
		main {
			margin: 30px 0;
		}
	}

	#gatsby-focus-wrapper { 
		${grid};
	}
`;

export default GlobalStyle;
import { createGlobalStyle, css } from "styled-components";

const grid = css`
	display: -ms-grid;
	display: grid;
	grid:
		"s1 head"
		"side main"
		"s2 foot"
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

	header, footer {
		display: flex;
		justify-content: space-between;
    align-items: baseline;

		section {display: flex; justify-content: flex-end; }
	}

	h1 { margin: 0 auto; }

	h1, h2, h3 { margin-bottom: 8px; }

	h3 { 
		font-size: 22px;
		a { color: black; } 
	}

	time { color: #4d4d4d; font-size: 15px; }

	footer { background: darkgray; color: black; font-size: smaller; }

	main {
		grid-area: main;
		margin: 0 auto;
	}

	aside { nav { & > * { display: block; border-bottom: 1px solid #d80b0b; padding: 10px; } } }

	article { 
		background: white; 
		padding: 30px 40px;
		margin: 0 auto 16px;
		width: 890px;
		main {
			margin: 30px 0;
		}
	}

	#gatsby-focus-wrapper { 
		${grid};
	}
`;

export default GlobalStyle;
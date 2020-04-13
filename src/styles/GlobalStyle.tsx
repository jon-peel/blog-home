import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; }
	
  a { color: #d80b0b; text-decoration: none; }

	body {
		background: #e7e7e7;
		color: black;		
		font-family: 'Roboto', sans-serif;
		font-size: 15px;
  }

	header, footer {
		display: flex;
		justify-content: space-between;
    align-items: baseline;

		section {display: flex; justify-content: flex-end; }
	}

	h3 { 
		font-size: 22px;
		margin-bottom: 8px;
		a { color: black; } 
	}

	time { color: #4d4d4d; font-size: 15px; }

	footer { background: darkgray; color: black; font-size: smaller; }

	main {
		max-width: 890px;
		margin: 0 auto;
	}

	article { 
		background: white; 
		padding: 30px 40px;
		margin-bottom: 16px;

		main {
			margin: 30px 0;
		}
	}
`;

export default GlobalStyle;
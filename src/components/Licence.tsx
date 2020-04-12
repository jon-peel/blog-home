import React from 'react';
import styled from 'styled-components';

const href = 'http://creativecommons.org/licenses/by-nc-sa/4.0/';
const src = 'https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png';
const alt = 'CC BY-NC-SA 4.0';
const name =
	'Creative Commons Attribution-NonCommercialSareAlike 4.0 International Licens';

const LicencImage = styled.img.attrs({alt,src})`
	border-width: 0;
	height: 31px;
	width: 88x;
`;

const Licence = () => (
	<>
		<a rel="license" href={href}>
			<LicencImage />
		</a>
		<br />
		This blog is licensed under a {' '}
		<a rel="license" href={href}>
		{name}
		</a>
	</>
);

export default Licence;

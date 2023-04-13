import { createGlobalStyle } from 'styled-components';

import PoppinsWoff from 'fonts/poppins/poppins-v20-latin-regular.woff';
import PoppinsWoff2 from 'fonts/poppins/poppins-v20-latin-regular.woff2';

import PoppinsBoldWoff from 'fonts/poppins/poppins-v20-latin-700.woff';
import PoppinsBoldWoff2 from 'fonts/poppins/poppins-v20-latin-700.woff2';

import CirceWoff from 'fonts/circe/Circe-Regular.woff';
import CirceWoff2 from 'fonts/circe/Circe-Regular.woff2';

import CirceBoldWoff from 'fonts/circe/Circe-Bold.woff';
import CirceBoldWoff2 from 'fonts/circe/Circe-Bold.woff2';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsWoff2}) format('woff2'),
       url(${PoppinsWoff}) format('woff');
}

@font-face {
  font-family: 'Poppins Bold';
  src: url(${PoppinsBoldWoff2}) format('woff2'),
       url(${PoppinsBoldWoff}) format('woff');
}

@font-face {
  font-family: 'Circe';
  src: url(${CirceWoff2}) format('woff2'),
       url(${CirceWoff}) format('woff');
}

@font-face {
  font-family: 'Circe Bold';
  src: url(${CirceBoldWoff2}) format('woff2'),
       url(${CirceBoldWoff}) format('woff');
}
`;

export default FontStyles;

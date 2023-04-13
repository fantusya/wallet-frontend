import { Toaster } from 'react-hot-toast';

import FontStyles from 'globalStyles/fontStyles';
import { GlobalStyle } from 'globalStyles/globalStyle';

export const App = () => {
  return (
    <>
      <h1>Wallet</h1>
      <FontStyles />
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

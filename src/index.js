import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'globalStyles/theme';

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <BrowserRouter> */}
      <BrowserRouter basename="/wallet-frontend">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);

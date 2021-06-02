import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

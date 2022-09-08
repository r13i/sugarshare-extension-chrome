import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/poppins';
import { ThemeProvider } from '@mui/material/styles';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';

import RollbarClient from 'clients/RollbarClient';
import { AuthProvider } from 'providers/AuthProvider';

import './index.css';
import App from './App';
import theme from './theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RollbarProvider instance={RollbarClient}>
        <ErrorBoundary>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ErrorBoundary>
      </RollbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

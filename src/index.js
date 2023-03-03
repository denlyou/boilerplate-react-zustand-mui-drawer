import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Local import ...
import reportWebVitals from './reportWebVitals.js';
import './index.css';
import App from './components/App.jsx';
import { BrowserRouter } from "react-router-dom";

// MUI theme 설정
const theme = createTheme({
  palette: {
    secondary: { // secondary 컬러 teal 색상으로 설정
      main: '#00796b',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals(); // Learn more: https://bit.ly/CRA-vitals

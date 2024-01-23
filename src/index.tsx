import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/Theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <App/>
    </ThemeProvider>
);

reportWebVitals();

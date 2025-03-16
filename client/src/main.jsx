import { BrowserRouter } from 'react-router';

import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
    <BrowserRouter >
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';

createRoot(document.querySelector('#root')).render(<App />);

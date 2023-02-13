import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GloblaStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GloblaStyle />
  </React.StrictMode>,
)

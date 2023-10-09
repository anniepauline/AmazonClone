import { React } from 'react';
import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { reviews } from './mocks/reviews';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchFilmsAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ErrorMessage />
      <App reviews={ reviews } />
    </Provider>
  </React.StrictMode>,
);

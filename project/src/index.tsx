import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { checkAuthAction, fetchFilmsDataAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import UiBlocker from './components/ui-blocker/ui-blocker';

store.dispatch(fetchFilmsDataAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ToastContainer />
      <UiBlocker />
      <App />
    </Provider>
  </React.StrictMode>,
);

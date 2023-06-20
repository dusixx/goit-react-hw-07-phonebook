import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store.js';
import './styles/styles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

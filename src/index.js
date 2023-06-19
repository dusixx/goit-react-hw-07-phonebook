import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store.js';
import './styles/styles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

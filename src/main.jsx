import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import { UserProvider } from './context/UserContext'; 

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserProvider> 
      <App />
    </UserProvider>
  </Provider>,
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import App from './components/App.jsx';
import { store } from './redux/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/products/:id" element={<App />} />
        <Route path="/" element={<Navigate replace to="/products/42375" />} />
      </Routes>
    </Provider>
  </Router>,
  document.getElementById('app'),
);

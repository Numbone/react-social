import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';


console.log('aaaa')

//let rerenderEntireTree = (state) => {
ReactDOM.render(
  
  <BrowserRouter>
    <Provider store={store}>
      <App />
      
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
//}


// rerenderEntireTree(store.getState())

// store.subscribe(() => {
//   let state = store.getState()
//   rerenderEntireTree(state)
// });

reportWebVitals();

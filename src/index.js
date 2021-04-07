import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {initStore} from './store/reducers/cartReducer'
import { createStore } from 'redux';
const loader = document.querySelector("#preloader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

const store = initStore()
setTimeout(
  () =>
ReactDOM.render(
    <React.Fragment>
 <Provider store={store}>
<App hideLoader={hideLoader} showLoader={showLoader} />

</Provider>
  </React.Fragment>
, document.getElementById('root')),1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

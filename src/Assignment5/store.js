// assignment5/store.js
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
export default store;

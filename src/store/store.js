import { createStore } from 'redux';
import reducer from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();
const store = createStore(reducer, enhancer);

export default store;

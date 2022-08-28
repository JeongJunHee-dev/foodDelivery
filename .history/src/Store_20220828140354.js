import {createStore} from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';

const Store = createStore(Reducers);

export default Store;
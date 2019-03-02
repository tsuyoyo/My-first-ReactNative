import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import SampleAppReducer from './reducers/SampleAppReducer';

export default createStore(
  SampleAppReducer,
  applyMiddleware(thunk)
);

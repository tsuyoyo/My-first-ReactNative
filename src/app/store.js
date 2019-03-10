import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import SampleAppReducer from './reducers/SampleAppReducer';

export default createStore(
  SampleAppReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

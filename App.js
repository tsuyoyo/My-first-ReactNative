import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SampleAppContainer from './src/app/containers/SampleApp';
import SampleAppReducer from './src/app/reducers/SampleAppReducer';

const store = createStore(SampleAppReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SampleAppContainer />
      </Provider>
    );
  }
}

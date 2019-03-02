import React from 'react';
import { Provider } from 'react-redux';
import SampleAppContainer from './src/app/containers/SampleApp';
import store from './src/app/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SampleAppContainer />
      </Provider>
    );
  }
}

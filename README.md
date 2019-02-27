# My first ReactNative

## 1. Set up ReactNative project

- By following [official doc](https://facebook.github.io/react-native/docs/getting-started), used [expo](https://expo.io/) to build RN app
  - `$ npm install -g expo-cli`
  - `$ expo init <appName>`
- expo looks `App.js` as an entry point of app by default
  - it's configurable by setting `expo.entryPoint` in app.json
  - `"entryPoint": "./src/app/App.js" `

## 2. Add dependency on redux

- `$ npm install --save redux`
- Defined `reducer`, `actionCreator` (only `UPDATE_TEXT` action), `SampleApp` component and `App`

## 3. Add dependency on react-redux

- Redux is not enough to build ReactNative app with Redux
- `react-redux` provides a framework to integrate redux on ReactNative

### Container component

- `<Provides>` stores `store` instance in its `context`

```javascript
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SampleApp />
        </View>
      </Provider>
    );
  }
}
```

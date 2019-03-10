# My first ReactNative

## Fundamental

### eslint

- Referred [this post](https://qiita.com/kjugk/items/b9dfc876e16dbfa4f447)
- `$ eslint ...` fails, `$ npm run lint` (by defining task on `package.json`) is needed because to use `eslint` installed in `node_modules` directory

#### Configuration for React

- Without any configuration, `'React' is defined but never used` is displayed for `import React from 'react'`
- Referred below
  - http://makotottn.hatenablog.com/entry/2017/09/07/010100
  - https://github.com/yannickcr/eslint-plugin-react/blob/8ef86c53003d78c88416a35e1e627914fcfabdf4/README.md#configuration

## Implementation notes

### 1. Set up ReactNative project

- By following [official doc](https://facebook.github.io/react-native/docs/getting-started), used [expo](https://expo.io/) to build RN app
  - `$ npm install -g expo-cli`
  - `$ expo init <appName>`
- expo looks `App.js` as an entry point of app by default
  - it's configurable by setting `expo.entryPoint` in app.json
  - `"entryPoint": "./src/app/App.js" `

### 2. Add dependency on redux

- `$ npm install --save redux`
- Defined `reducer`, `actionCreator` (only `UPDATE_TEXT` action), `SampleApp` component and `App`

### 3. Add dependency on react-redux

- Redux is not enough to build ReactNative app with Redux
- `react-redux` provides a framework to integrate redux on ReactNative

#### Container component

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

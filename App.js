import React from 'react';
import { createStore } from 'redux';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const initialState = {
  displayText : 'init state',
};

function textReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        displayText: action.payload.displayText,
      };
    default:
      return state;
  }
}

const store = createStore(textReducer);

const updateText = (text) => ({
  type: 'UPDATE_TEXT',
  payload: {
    displayText: text,
  }
});

export function SampleApp({ store }) {
  const { displayText } = store.getState();
  return(
    <View>
      <TextInput
        onChangeText={(event) => store.dispatch(updateText(event.toString()))} />
      <Text>{displayText}</Text>
    </View>
  );
}

// メモ: store.subscribe(() => render);に相当するものがないので、
// ここでreact-reduxの出番
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SampleApp store={store} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

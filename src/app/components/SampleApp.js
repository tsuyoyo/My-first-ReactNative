import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 24,
  },
  textView: {
    fontSize: 32,
  },
});

export default function SampleApp(
  {
    displayText,
    updateTextAsync
  }
) {
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Input text here'
        onChangeText={(event) => updateTextAsync(event.toString())} />
      <Text style={styles.textView}>
        {displayText}
      </Text>
    </View>
  );
}

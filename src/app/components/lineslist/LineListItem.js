import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LineListItem(props) {
  return(
    <View>
      <Text>{props.line.item.line_name}</Text>
    </View>
  );
}

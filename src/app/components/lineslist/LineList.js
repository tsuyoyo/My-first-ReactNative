import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import LineListItem from './LineListItem';

function renderLineList(line) {
  return <LineListItem line={line} />
}

export default function LineList(props) {
  return(
    <FlatList
      data={props.lines}
      keyExtractor={(line, index) => `line_${index}`}
      renderItem={(line) => renderLineList(line)}
    />
  );
}

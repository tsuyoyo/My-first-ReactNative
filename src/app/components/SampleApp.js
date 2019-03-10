import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import LineList from './lineslist/LineList';
import PrefecturePicker from './prefecturepicker/PrefecturePicker';

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
    lines,
    selectedPrefecture,
    updateTextAsync,
    selectPrefecture,
  }
) {
  return(
    // memo : 選択されている県もstoreに状態として持っておかないとうまくいかないかも
    <View>
      <PrefecturePicker
        onPrefectureSelected={id => updateTextAsync(id)}
        selectedPrefecture={selectedPrefecture}
        onSelectPrefecture={prefecture => selectPrefecture(prefecture)} />
      <ScrollView>
        <LineList lines={lines} />
      </ScrollView>
    </View>
  );
}

import React from 'react';
import { Picker } from 'react-native';

const prefectures = [
  {key: "北海道", value: "01"},
  {key: "東京", value: "13"},
  {key: "千葉県", value: "12"},
  {key: "大阪府", value: "27"},
  {key: "福岡県", value: "40"}
];

function PrefecturePickerItem(prefecture) {
  return(
    <Picker.Item
      key={prefecture.key}
      label={prefecture.key}
      value={prefecture.value}
    />
  );
}

export default function PrefecturePicker(props) {
  return(
    <Picker
      selectedValue={props.selectedPrefecture.value}
      onValueChange={(value) => {
        props.onSelectPrefecture(prefectures.find(p => p.value == value));
        props.onPrefectureSelected(value);
      }}
    >
      { prefectures.map(pref => PrefecturePickerItem(pref)) }
    </Picker>
  );
}

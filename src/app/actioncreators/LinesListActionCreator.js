import axios from 'axios';
import convert from 'react-native-xml2js';
import Actions from '../actions/SampleAppAction';
import {
  showLoading,
  dismissLoading,
  updateText
} from './SampleAppActionCreator';


function updateLinesList(lines) {
  return {
    type: Actions.UPDATE_LINE_LIST,
    payload: {
      lines: lines,
    }
  };
}

export function selectPrefecture(prefecture) {
  return {
    type: Actions.SELECT_PREFECTURE,
    payload: {
      selectedPrefecture: prefecture,
    }
  };
}

// TODO : Write test!!!!!
export function updateTextAsync(prefectureId) {
  return (dispatch) => {
    showLoading();
    axios
      .get(`http://www.ekidata.jp/api/p/${prefectureId}.xml`)
      .then(function (response) {
        convert.parseString(response.data,
          (err, result) => dispatch(updateLinesList(result.ekidata.line))
        );
      })
      .catch((error) => dispatch(updateText(JSON.stringify(error))))
      .then(() => dismissLoading());
  };
}

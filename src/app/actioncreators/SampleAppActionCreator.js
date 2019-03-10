import Actions from '../actions/SampleAppAction';

export function updateText(text) {
  return {
    type: Actions.UPDATE_TEXT,
    payload: {
      displayText: text,
    }
  };
}

export function showLoading() {
  return {
    type: Actions.SHOW_LOADING,
  };
}

export function dismissLoading() {
  return {
    type: Actions.DISMISS_LOADING,
  };
}

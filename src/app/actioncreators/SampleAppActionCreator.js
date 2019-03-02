import Actions from '../actions/SampleAppAction';

export function updateText(text) {
  return {
    type: Actions.UPDATE_TEXT,
    payload: {
      displayText: text,
    }
  };
};

// TODO : Write test!!!!!
export function updateTextAsync(text) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(updateText(text));
    }, 2000);
  };
};

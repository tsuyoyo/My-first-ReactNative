import Actions from '../actions/SampleAppAction';

export default {
  updateText: (text) => ({
    type: Actions.UPDATE_TEXT,
    payload: {
      displayText: text,
    }
  }),
};

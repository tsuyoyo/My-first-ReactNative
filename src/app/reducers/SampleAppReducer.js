import Action from '../actions/SampleAppAction';

const initialState = {
  displayText : 'init state',
};

export default function sampleAppReducer(state = initialState, action) {
  switch (action.type) {
    case Action.UPDATE_TEXT:
      return {
        ...state,
        displayText: action.payload.displayText,
      };
    default:
      return state;
  }
}

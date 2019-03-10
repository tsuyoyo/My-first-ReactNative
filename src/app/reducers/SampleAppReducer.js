import Action from '../actions/SampleAppAction';

const initialState = {
  displayText : 'init state',
  lines: [],
  selectedPrefecture: { key: "北海道", value: "01" },
};

export default function sampleAppReducer(state = initialState, action) {
  switch (action.type) {
    case Action.UPDATE_TEXT:
      return {
        ...state,
        displayText: action.payload.displayText,
      };
    case Action.UPDATE_LINE_LIST:
      return {
        ...state,
        lines: action.payload.lines,
      };
    case Action.SELECT_PREFECTURE:
      return {
        ...state,
        selectedPrefecture: action.payload.selectedPrefecture,
      };
    default:
      return state;
  }
}

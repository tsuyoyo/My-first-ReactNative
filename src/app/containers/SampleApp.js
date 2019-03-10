import { connect } from 'react-redux';
import SampleApp from '../components/SampleApp';
import * as LinesListActionCreator from '../actioncreators/LinesListActionCreator';
import * as SampleAppActionCreator from '../actioncreators/SampleAppActionCreator';

function mapStateToProps(state) {
  const {
    displayText,
    lines,
    selectedPrefecture,
  } = state;
  return {
    displayText: displayText, // mapped as one of props
    lines: lines,
    selectedPrefecture: selectedPrefecture,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateText(text) {
      dispatch(SampleAppActionCreator.updateText(text));
    },
    showLoading() {
      dispatch(SampleAppActionCreator.showLoading());
    },
    dismissLoading() {
      dispatch(SampleAppActionCreator.dismissLoading());
    },
    updateTextAsync(text) { // is to be part of props
      dispatch(LinesListActionCreator.updateTextAsync(text));
    },
    selectPrefecture(prefecture) {
      dispatch(LinesListActionCreator.selectPrefecture(prefecture));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleApp);

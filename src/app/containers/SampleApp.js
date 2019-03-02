import { connect } from 'react-redux';
import SampleApp from '../components/SampleApp';
import * as actionCreator from '../actioncreators/SampleAppActionCreator';

function mapStateToProps(state) {
  const { displayText } = state;
  return {
    displayText: displayText // mapped as one of props
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTextAsync(text) { // is to be part of props
      dispatch(actionCreator.updateTextAsync(text));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleApp);

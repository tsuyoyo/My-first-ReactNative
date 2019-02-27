import { connect } from 'react-redux';
import SampleApp from '../components/SampleApp';
import ActionCreator from '../actioncreators/SampleAppActionCreator';

function mapStateToProps(state) {
  const { displayText } = state;
  return {
    displayText: displayText // mapped as one of props
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateText(text) { // is to be part of props
      dispatch(ActionCreator.updateText(text)); // dispatching updateText action
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleApp);

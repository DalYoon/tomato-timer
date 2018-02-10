import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions } from '../../reducer';

import Timer from './presenter';

function mapStateToProps(state) {
    const { isPlaying, elapcedTime, timerDuration } = state;
    return {
        isPlaying,
        elapcedTime,
        timerDuration
    };
}

function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
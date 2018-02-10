// import 

// Actions

const START_TIME = 'START_TIME';
const RESTART_TIME = 'RESTART_TIME';
const ADD_SECOND = 'ADD_SECOND';

// Action Creators

function startTimer() {
    return {
        type: START_TIME
    };
}

function restartTimer() {
    return {
        type: RESTART_TIME
    };
}

function addSecond() {
    return {
        type: ADD_SECOND
    };
}

// Reducer

const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapcedTime: 0,
    timerDuration: TIME_DURATION
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case START_TIME:
            return applyStartTimer(state);
        case RESTART_TIME:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

// Reducer Functions

function applyStartTimer(state) {
    return {
        ...state,
        isPlaying: true
    };
}

function applyRestartTimer(state) {
    return {
        ...state,
        isPlaying: false,
        elapcedTime: 0
    };
}

function applyAddSecond(state) {
    if(state.elapcedTime < TIME_DURATION) {
        return {
            ...state,
            elapcedTime: state.elapcedTime + 1 
        };
    } else {
        return {
            ...state,
            isPlaying: false
        };
    }
}

// Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
};

export { actionCreators };

// Export Reducer

export default reducer;
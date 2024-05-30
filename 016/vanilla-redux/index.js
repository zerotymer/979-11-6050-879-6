const divToogle = document.querySelector('.toogle');
const counter = document.querySelector('h1');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');

/// Action Types
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/// Action Creators
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const incrementCounter = () => ({ type: INCREMENT });
const decrementCounter = () => ({ type: DECREMENT });

/// initialState
const initialState = {
    toggle: false,
    counter: 0
};

/// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:     return { ...state, toggle: !state.toggle};
        case INCREMENT:         return { ...state, counter: state.counter + 1 };
        case DECREMENT:         return { ...state, counter: state.counter - 1 };
        default:                return state;
    }
}

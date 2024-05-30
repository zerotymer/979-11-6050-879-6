import { createStore } from 'redux';

const divToogle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrement = document.querySelector('#increase');
const btnDecrement = document.querySelector('#decrease');

/// Action Types
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

/// Action Creators
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

/// initialState
const initialState = {
    toggle: false,
    counter: 0
};

/// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:     return { ...state, toggle: !state.toggle};
        case INCREASE:          return { ...state, counter: state.counter + action.difference };
        case DECREASE:          return { ...state, counter: state.counter - 1 };
        default:                return state;
    }
}

/// Store
const store = createStore(reducer);

/// getState
const render = () => {
    const state = store.getState();

    if (state.toggle)       divToogle.classList.add('active');
    else                    divToogle.classList.remove('active');

    counter.innerText = state.counter;
};

render();

/// Subscribe
store.subscribe(render);

/// Dispatch
divToogle.onclick = () => store.dispatch(toggleSwitch());
btnIncrement.onclick = () => store.dispatch(increase(1));
btnDecrement.onclick = () => store.dispatch(decrease());
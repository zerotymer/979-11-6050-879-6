const divToogle = document.querySelector('.toogle');
const counter = document.querySelector('h1');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const incrementCounter = () => ({ type: INCREMENT });
const decrementCounter = () => ({ type: DECREMENT });

const initialState = {
    toggle: false,
    counter: 0
};

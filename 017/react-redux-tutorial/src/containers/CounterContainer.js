import { connect, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ increase, decrease }) => {
    const number = useSelector(state => state.counter.number);
    return (
        <Counter 
            number={ number }
            onIncrease={ increase }
            onDecrease={ decrease }
        />
    );
};


// Redux Connect
export default connect(
    (state) => ({ number: state.counter.number}), 
    { increase, decrease }
)(CounterContainer);
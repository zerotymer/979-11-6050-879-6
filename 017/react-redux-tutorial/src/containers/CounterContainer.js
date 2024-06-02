import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispacth = useDispatch();
    const onIncrease = useCallback(() => dispacth(increase()), [dispacth]);
    const onDecrease = useCallback(() => dispacth(decrease()), [dispacth]);

    return (
        <Counter 
            number={ number }
            onIncrease={ onIncrease }
            onDecrease={ onDecrease }
        />
    );
};


// Redux Connect
export default CounterContainer;
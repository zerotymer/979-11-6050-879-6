import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

/// region Redux Mapper
// store의 state(store.getState())를 받아와 props로 컨테이너에 전달
// const mapStateToProps = (state) => ({
//     number: state.counter.number
// });
// dispatch함수(store.dispatch(action))을 정의하여 props로 컨테이너에 전달
// 여기선 dispatch(action creator)를 정의
// const mapDispatchtoProps = (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease())
// });
/// endregion


const CounterContainer = ({ number, increase, decrease }) => {
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
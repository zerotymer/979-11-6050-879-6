import React from 'react';

class LifeCycleSample extends React.Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null; // ref를 설정할 부분


    /// region LifeCycle Methods
    /**
     * 1. constructor
     * 컴포넌트 생성자 메서드
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        console.log('1. constructor');
    }

    /**
     * 2. getDerivedStateFromProps
     * 1. getDerivedStateFromProps
     * props로 받아 온 값을 state에 동기화시키는 용도로 사용
     * @param {*} nextProps 
     * @param {*} prevState 
     * @returns 
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('2/1. getDerivedStateFromProps', nextProps, prevState);
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    /**
     * 4. componentDidMount
     * 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
     */
    componentDidMount() {
        console.log('4. componentDidMount');
    }

    /**
     * 2. shouldComponentUpdate
     * 리렌더링을 결정하는 메서드
     * @param {*} nextProps 
     * @param {*} nextState 
     * @returns 
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('2. shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    /**
     * 4. getSnapshotBeforeUpdate
     * DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 componentDidUpdate에서 조회할 수 있게 함
     * @param {*} prevProps 
     * @param {*} prevState 
     * @returns 
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('4. getSnapshotBeforeUpdate', prevProps, prevState);
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    
    /**
     * 5. componentDidUpdate
     * 리렌더링을 완료한 후 실행
     * @param {*} prevProps 
     * @param {*} prevState 
     * @param {*} snapshot 
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('5. componentDidUpdate', prevProps, prevState, snapshot);
    }

    /**
     * 1. componentWillUnmount
     * 컴포넌트를 DOM에서 제거할 때 실행
     */
    componentWillUnmount() {
        console.log('1. componentWillUnmount');
    }
    /// endregion LifeCycle Methods


    /// region Event Handlers
    handleClick = () => {
        console.log('LifeCycleSample------------------------');
        this.setState({
            number: this.state.number + 1
        });
    };
    /// endregion Event Handlers
    

    render() {
        console.log('3. render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    { this.state.number }
                </h1>
                <p>color: { this.state.color }</p>
                <button onClick={ this.handleClick }>더하기</button>
            </div>
        );
    }


}

export default LifeCycleSample;
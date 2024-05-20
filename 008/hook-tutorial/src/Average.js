import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [ list, stateList ] = useState([]);
    const [ number, stateNumber ] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => { stateNumber(e.target.value); }, []); // 변경없음. 초기 렌더링시만 수행
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number)); // concat() returns a new array
        stateList(nextList);
        stateNumber('');
        inputEl.current.focus();
    }, [number, list]); // 초기 렌더링, number, list가 변경시에 리랜더링

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={ number } onChange={ onChange } ref={ inputEl }/>
            <button onClick={ onInsert }>등록</button>
            <ul>
                { list.map((value, index) => <li key={ index }>{ value }</li>) }
            </ul>
            <div>
                <b>평균값:</b> { avg }
            </div>
        </div>
    );
};

export default Average;
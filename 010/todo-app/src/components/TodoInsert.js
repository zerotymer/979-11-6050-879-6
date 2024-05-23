import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [ value, setValue ] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []); // 리렌더링 없음.
    
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); // value 초기화

        // submit 이벤트의 브라우저 새로고침을 방지.
        e.preventDefault();
    }, [ onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={ onSubmit }>
            <input placeholder="할 일을 입력하세요" value={ value } onChange={ onChange }/>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import './TodoList.scss';
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onToggle }) => {

    const rowRenderer = useCallback(row => {
        const { index, key, style } = row;
        const todo = todos[index];
        return (
            <TodoListItem todo={ todo } key={ todo.id } onRemove={ onRemove } onToggle={ onToggle } style={ style }/>
        );
    }, [ todos, onRemove, onToggle ]);

    return (
        <List className="TodoList" style={{ outline: 'none' }}
            width={ 512 } height={ 513 }
            rowCount={ todos.length } rowHeight={ 57 } rowRenderer={ rowRenderer } 
            list={ todos } />
    );
};

export default React.memo(TodoList);
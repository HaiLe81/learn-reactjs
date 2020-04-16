import React from 'react'
import './TodoItem.css';
import classnames from 'classnames';

let TodoItem = (props) => {

    const { item, onClick } = props;

    return (
        <div onClick={onClick} className={classnames('TodoItem', {
            'TodoItem-complete': item.isComplete
        })}>
            <p>{props.item.title}</p>
        </div>
    );
}

export default TodoItem;
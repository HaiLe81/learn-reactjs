import React from 'react'
import './TodoItem.css';
import classnames from 'classnames';
import checkImg from '../../images/right.svg';
import checkComplete from '../../images/correct.svg';

let TodoItem = (props) => {

    const { item, onClick } = props;
    let url = checkImg;
    if(item.isComplete) {
        url = checkComplete;
    }

    return (
        <div className={classnames('TodoItem', {
            'TodoItem-complete': item.isComplete
        })}>
            <img onClick={onClick} src={url} width={32} height={32} alt="not found"/>
            <p>{props.item.title}</p>
        </div>
    );
}

export default TodoItem;
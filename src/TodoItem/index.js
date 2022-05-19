import React from 'react';
import './TodoItem.css';
import { FaCheck } from 'react-icons/fa';
import { FaEraser } from 'react-icons/fa';


function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FaEraser/>
      </span>
    </li>
  );
}

export { TodoItem };

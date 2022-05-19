import React from 'react';
import './TodoButton.css';

function TodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };
  
  return (
    <button className="TodoButton" onClick={ () => onClickButton('Aquí se debería abrir el modal') }>
      +
    </button>
  );
}

export { TodoButton };
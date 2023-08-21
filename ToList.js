import React from 'react';


const ToList = (props) => {

  
  return (
    <div>
      
      <li> {props.text} <i className="fa-solid fa-trash icon-left-margin fa-fade" onClick={ ()=>{props.onSelect(props.id);} } ></i>  </li>
    </div>
  );
}

export default ToList;

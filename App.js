import React, { useState } from 'react'
import './App.css'
import ToList from './ToList';

const App = () => {

  const [Input, setInput] = useState("");
  const [Items, setItems] = useState([]);

  const showItem  = (event) =>{
        setInput(event.target.value);
  }

  

  const setItemSequence = () =>{
    if(Input === ""){
      alert("enter the data ! ")
    }
    else {
    setItems((oldItems)=>{
        return [...oldItems, Input];
    });
  }
    setInput("");
  };

  const deleteItems = (id) =>{
    console.log('deleted ! ');
    setItems((oldItems) =>{
      return oldItems.filter((errElem, index) =>{
        return index !== id;
      });
    });
  }

  return (
    <div className='main-div'>
    <div className='center-class'>
      <input type='text' className='input-class' onChange={showItem} value={Input} placeholder='Enter the data'></input>
      <button type='submit' className='button-class' onClick={setItemSequence}> Add</button>

      <div className='list-class'>
        <ol>
          {/*<li> { Input } </li>*/}
          {Items.map((ItemValue, index )=>{
              return <ToList key={index} id={index} onSelect={deleteItems} text={ItemValue}/>
          })}
          
        </ol>
      </div>
    </div>
    </div>
  )
}

export default App;

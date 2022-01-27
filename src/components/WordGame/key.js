import './key.css';
import React, {useState,useEffect,forwardRef, useImperativeHandle} from 'react';

function Key(props,ref) {
  const [color, setColor] = useState(props.className);
// This will launch only if propName value has chaged.
useEffect(() => { setColor(props.className) }, [props.className]);
  function keyPress(e) {
    props.onClick("A","red");
    console.log(props.keyVal)
    props.type(props.keyVal)
  }

  return (
     // <button className={color} onClick={() =>props.onClick()}> {props.innerText} </button>
     <button className={color} onClick={() =>console.log(props.className)}> {props.innerText} </button>
)
}

export default React.forwardRef(Key);
import './WordGame.css';
import Key from './key.js'
import React, {useState} from 'react';
import { forwardRef, useRef, useImperativeHandle }  from 'react';

function WordGame(props) {
  const [guess, setGuess] = useState("");
  const [butColor, setButColor] = useState(new Array(26).fill("blue"));
  var colors= new Array(26).fill("blue");
  var count = 0;
  var typeOne = (c) => {
    changeColor(c,"red");
    setGuess(guess + c);
    console.log(guess);
  }
  var changeColor = (cha, color) => {
    let c = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let index = c.indexOf(cha);
    colors[index] = color;
    setButColor(colors);
    console.log(butColor)
    setButColor(butColor);
  }

  function makeButtons(num) {
    var rowOne="QWERTYUIOP";
    var rowTwo="ASDFGHJKL";
    var rowThree="ZXCVBNM";
    const paging = []
    for (let i= 0;i<num; i++){
      var row
      if(num==10){
        row=rowOne
      }
      else if(num==9){
        row=rowTwo
      }
      else {
        row=rowThree
      }
      var c= (
        <button className={butColor} onClick={() => typeOne(row[i])}> {row[i]} </button>
        //<Key onClick={()=>typeOne(row[i])} className={"key " + colors[i]} innerText={row[i]}/> 
      )
      paging.push(c)
      count++;
      }
      //childRef.current.turnColor("C", "red")
    return paging;
  }
  return (

    <>
    <div>
        <div className= "top">{makeButtons(10)}</div>
        <div className= "top">{makeButtons(9)}</div>
        <div className= "top">{makeButtons(7)}</div>
        </div>

    </>
)
}

export default WordGame;
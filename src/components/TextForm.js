import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleonClick1 = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleonClick2 = () => {
    if (text === "") {
      return 0;
    }
    return text.split(" ").length;
  }

  const handleonClick3 = () => {
    const arr = text.split(" ");
    let newText = "";
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++){
        if (i > 0 && j === 0){
          newText = newText + " ";
        }
        if (flag === true){
          console.log(arr[i][j])
          newText = newText + arr[i][j].toUpperCase();
          console.log(newText);
          flag = false;
        }
        else {
          newText = newText + arr[i][j].toLowerCase();
          flag = true;
        }
      }
      setText(newText);
    }
    props.showAlert("Converted to Toggle Case!", "success");
  }

  const handleonChange = (event) => 
  { 
    setText(event.target.value);
  }
  const [text, setText] = useState(""); 
  // text = "new text" // wrong way to change the state
  //setText("new text"); // correct way to change the state
  return (
    <>
    <div className = "container" style = {props.myStyle}>
        <h1>{props.heading} </h1>
        <div className ="mb-3">
            <textarea className = "form-control" value = {text} onChange = {handleonChange} style = {{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'grey' : 'white'}} id = "myBox" rows = "8"></textarea>
        </div>
        <button className = "btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className = "btn btn-primary mx-2" onClick ={handleonClick1}>Convert to Lowercase</button>
        <button className = "btn btn-primary mx-2" onClick ={handleonClick3}>Toggle Case</button>
    </div>
    <div className = "containter my-3" style = {props.myStyle}>
      <h2>Your text summary</h2>
      <p>{handleonClick2()} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2>
        Preview
      </h2>
      <p>{text}</p>
    </div>
    </>
  )
}

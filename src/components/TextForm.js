import React,{useState} from 'react';
import '../App.css' 


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
 
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
    
  }

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success")
  }
//   const styles = StyleSheet.create({
//     bold: {fontWeight: 'bold'},
//     italic: {fontStyle: 'italic'},
//     underline: {textDecorationLine: 'underline'}
// })
  // const handleItalic = () => {
  //   console.log("hello");
  // }
  // New Code
  function changeFontStyle(e) {
    const text = document.getElementById("myBox");
    const preview_text = document.getElementById('preview_text');
    if(e.target.id=="italic"){
      e.target.classList.toggle('active');
      text.classList.toggle('italic');
      preview_text.classList.toggle('italic');
    }
    if(e.target.id=="bold"){
      e.target.classList.toggle('active');
      text.classList.toggle('bold');
      preview_text.classList.toggle('bold');
  }
  if(e.target.id=="underline"){
    e.target.classList.toggle('active');
    text.classList.toggle('underline');
    preview_text.classList.toggle('underline');
}
}

  // const btnAction = document.querySelector('.btn-action');
  // btnAction.addEventListener('click', changeFontStyle);
 // New Code
  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  
  return (
    <>
  <div className = "container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button id="italic" className="btn btn-primary mx-2 my-2" onClick={changeFontStyle}>Convert to Italic</button>
<button id="bold" className="btn btn-primary mx-2 my-2" onClick={changeFontStyle}>Convert to Bold</button>
<button id="underline" className="btn btn-primary mx-2 my-2" onClick={changeFontStyle}>Convert Underline</button>

{/* New Code */}
   {/* <div class="btn-action">
   <button id="italic">Convert to Italic</button>
   </div> */}
{/* New Code */}

  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p id='preview_text'>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
  </>
  )
}

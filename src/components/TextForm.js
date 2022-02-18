import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClickUpper = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleUpClickLower =()=> {
        // console.log("LowerCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    
    const handleClear = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = () => {
        // let newText = document.getElementById("myBox");
        // newText.select();
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    }

    const handleExtraSpace= () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }


    const handleOnChange =(event)=> {
        console.log("On change");
        setText(event.target.value);
    }

   // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{ color:props.mode === 'dark' ?'white':'rgb(7 14 24)' }}>
    <h1 className="mb-2">{props.heading}</h1>
    <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ?'rgb(25 30 36)':'#f8f9fa',  color:props.mode === 'dark' ?'white':'rgb(7 14 24)' }} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-info my-2" onClick={handleUpClickUpper}>To Uppercase</button>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleUpClickLower}>To LowerCase</button>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleClear}>Clear</button>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleCopy}>Copy</button>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleExtraSpace}>Remove extra spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode === 'dark' ?'white':'rgb(7 14 24)' }}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} minitues read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:'Nothing to preview'}</p>
    </div>
    </>
  )
}

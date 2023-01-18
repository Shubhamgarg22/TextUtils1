import React, {useState} from 'react'

export default function TextForm(props) {
  
  const [text ,setText] = useState('');
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success");
  }
  const handleClClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text","success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
    
  }

  return (
    <>
    <div className = "container" style ={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor : props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>

        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClClick}>clear text</button>
    </div>
    <div className="container my-3" style ={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
        <h2>Prview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}

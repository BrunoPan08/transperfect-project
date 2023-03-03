import React, { useState } from 'react'
import './ChooseColor.css'

const colorList = [
  {
      color: "Red",
      value: "#ff0000"
  },
  {
      color: "Blue",
      value: "#0000ff"
  },
  {
      color: "Green",
      value: "#00ff00"
  },
  {
      color: "Yellow",
      value: "#ffff00"
  },
  {
      color: "White",
      value: "#ffffff"
  },
  {
      color: "Brown",
      value: "#964b00"
  },
];

function ChooseColor() {
  const [selectedColor, setSelectedColor] = useState('');
  const [message, setMessage] = useState('');

  const handleColorSelection = (value) => {
    setSelectedColor(value);
  }

  const handleInputColor = (e) => {
    e.preventDefault();    
    const color = e.target.value;

    if (color === '#ff0000') {
      const nameColor = color.replace('#ff0000','Red');
      setMessage(null);
      setSelectedColor(nameColor);
    } else if(color === '#0000ff') {
      const nameColor = color.replace('#0000ff','Blue');
      setMessage(null);
      setSelectedColor(nameColor);
    } else if(color === '#00ff00') {
      const nameColor = color.replace('#00ff00','Green');
      setMessage(null);
      setSelectedColor(nameColor);
    } else if(color === '#ffff00') {
      const nameColor = color.replace('#ffff00','Yellow');
      setMessage(null);
      setSelectedColor(nameColor);
    } else if(color === '#ffffff') {
      const nameColor = color.replace('#ffffff','White');
      setMessage(null);
      setSelectedColor(nameColor);
    } else if(color === '#964b00') {
      const nameColor = color.replace('#964b00','Brown');
      setMessage(null);
      setSelectedColor(nameColor);
    } else if(color === '' && color.length <= 7) {
      setMessage(null);
    } else {
      setMessage('You choose wrong color!');
    }

  }


  return (
    <div>
      <div className='box-choose-color'>
        <h2>Choose your color or write color in hexadecimal</h2>      
        <div className='align-box-color'>        
          {colorList.map((c) => (
            <button key={c.color} className={c.color} onClick={() => handleColorSelection(c.color)}><p className='style-hex-number'>{c.value}</p></button>
          ))}
        </div>
        <div className='content-input'>
          <div>
            <label>type number of color in hexadecimal</label>
          </div>
          <div>
            <input onChange={handleInputColor}/>
            <div>
              {message && <label className='message-input'>{message}</label>}
            </div>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='box-answer'>
          <div className='box-text'>
            <p>You choose: </p>
            <p>{selectedColor}</p>
            <div className={`select-${selectedColor}`}></div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseColor

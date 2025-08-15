"use client"
import React, { use, useLayoutEffect,useState } from 'react'

const Bgcolorchange = () => {
    const [bgColor, setBgColor] = useState('white');
    useLayoutEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor]);

        
  return (
    <div>
        <h1>Change Background Color</h1>    
        <button onClick={() => setBgColor('lightblue')}>Light Blue</button>
        <button onClick={() => setBgColor('lightgreen')}>Light Green</button>
        <button onClick={() => setBgColor('lightcoral')}>Light Coral</button>
        <button onClick={() => setBgColor('white')}>Reset</button>
    </div>
  )
}

export default Bgcolorchange

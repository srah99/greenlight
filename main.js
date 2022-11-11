import React,{useState, useCallback} from'react'
import ReactDOM from 'react-dom'

const width=160 //we can use math on these constants
const height=160
const circleRadius = 30;
const initialMousePosition ={x:width/2, y:height/2};



const App =()=>{
    const [mousePosition, mousePostion]= useState(initialMousePosition); //uses es56 destructiong for arrys
    const handleMouseMove = useCallback(event=>{
        const {clientX, clientY}=event;
        setMousePosition({x:clientX, y:clientY});
        console.log({clientX,clientY});
    },[setMousePosition]);
    return(
<svg width={width} height={height} onMouseMove={handleMouseMove}>
<circle 
    cx={mousePosition.x}
    cy={mousePosition.y}
    r={circleRadius}/>
</svg>
);      
};
console.log(mouthArch);

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

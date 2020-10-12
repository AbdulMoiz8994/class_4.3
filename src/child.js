import React,{useContext} from 'react';
import counterContext from './counterContext.js';
const Child = function (props){
let counterValue=useContext(counterContext);   
    return(
        <div>
            <h1>This is child comp</h1>
    <h4>This is counter Context: {counterValue}</h4>
    <button onClick={() =>alert("Pressd Button")}>Increment</button>
         </div>
    );
}
export default Child;

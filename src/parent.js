import React from 'react'
import  Child from './child.js';

const Parent=function (props){
    return(

    <Child name={props.name}/>     

    );
}
export default Parent;

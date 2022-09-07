import React from 'react'
// JSX -----> js // browser ---- js
let FunctionClick  = ()=>{
    
    function ClickHandler(){
        console.log("Button is click")
    }
    return (

        // jsx
        <div>
            <h1>hello</h1>
            <button onClick={ClickHandler}>Click me</button>
        </div>
    )
}
export default FunctionClick
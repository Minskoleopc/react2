import React from "react";
let ChildComponent = (props)=>{
    return (
        <div>
            <button onClick={()=>props.handleGreet('param from child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent

// parentComponent (class component) --- load --- App.js
// childComponent (function component) ---- load -- ParentComponent
// props ---- function
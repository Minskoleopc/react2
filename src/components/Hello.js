import React from 'react'

const Hello = (props)=>{
    debugger
    console.log(props)
    return (
        <h1>Hello {props.name} {props.number}</h1>
    )

   // return React.createElement('h1','null','Hello Chinmay')
   //return React.createElement('h1',{id:'hello'},'Hello Chinmay') adding attribute

}
export default Hello
import React , {Component, component} from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    increment(){
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        // Async problem
        // this.setState({
        //     count: this.state.count + 1  
        // })
        // console.log(this.state.count)
        // this.setState({
        //     count: this.state.count + 1  
        // },()=>{
        //     console.log(this.state.count)
        // })
        //console.log(this.state.count)

        this.setState((preState)=>({
                count:preState.count +1
            }
        ))
        
    }


    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (

            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>PlusOne</button>
            </div>

        )
    }

}
export default Counter
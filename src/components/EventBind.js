import React, { Component } from "react";

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            greet: "hello"
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     //console.log(this)
    //     this.setState({
    //         greet: "Bye"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            greet: "Bye"
        })
    }



    render() {
        return (
            <div>
                <div>{this.state.greet}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Change Me</button> */}
                {/* <button onClick={this.clickHandler}>Change Me</button> */}
                {/* <button onClick={this.clickHandler()}>Change Me</button> infite */}
                {/* <button onClick={() => this.clickHandler()}>Change</button> */}
                <button onClick={this.clickHandler}>Change Me</button>
            </div>
        )
    }

}
export default EventBind


// parent child --- props and rendering
import React, { Component } from "react";
class NeWC extends Component {
    constructor() {
        super()
        this.state = {
            msg: "hello"
        }
    }
    updateState() {
        this.setState({
            msg:
                'GeeksForGeeks welcomes you !!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => {
                    this.updateState()
                }}>changeText</button>
            </div>
        )
    }

    // component --- I am new 

    // props -----> app component

}
export default NeWC
import React, { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        console.log('button is clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Change Me</button>
            </div>

        )
    }

}

export default ClassClick
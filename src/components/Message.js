
import React ,{Component} from "react";

class Message extends Component {

    constructor(){
        super()
        this.state = {
            msg:"I am new to js"
        }

    }

    ChangeMessage(){
        // this.state = {
        //     msg:"I am new to js 2"
        // }
        // console.log(this.state)

        this.setState({
            msg:"I am new to js 2"
        })
    }

    render(){
        return (

            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this. ChangeMessage()}>Change Button</button>
            </div>

        )
    }


}

export default Message
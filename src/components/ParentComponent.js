// class and function component
import React ,{Component} from "react";
import ChildComponent  from "./ChildComponent";

class ParentComponent extends Component {

    constructor(){
        super()
        this.state = {
            parentName:'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
   
    greetParent(paraChild){
        console.log("hello")
        console.log(paraChild)
    }

    render(){
        return (
            <div>
                <ChildComponent handleGreet = {this.greetParent} ></ChildComponent>
            </div>
        )

    }

}

export default ParentComponent


//-------------------------
        //(red)                           //button - onClick()
//---------------------------
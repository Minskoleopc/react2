import React ,{Component} from "react";
class  Wish2 extends Component {
   render(){
        return <h1>My firstName is {this.props.name}{this.props.lastName}</h1>
    }

}
export default Wish2


function add(){
    let x = 10 
    let y = 20
    console.log(x+y)
}
//add(12,13)
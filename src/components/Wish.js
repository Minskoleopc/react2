import React ,{Component} from "react";
class  Wish extends Component {

    render(){
        let{name,lastName} = this.props
        return <h1>{name}{lastName}</h1>

    }
}
export default Wish
// Event binding on class compoenent , event binding on function componet

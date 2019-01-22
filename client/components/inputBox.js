var React = require("react");

var style = {
    position:"fixed",
    width:"100%",
    bottom:0
}

module.exports = 
class InputBox extends React.Component {


    constructor(){
        super();

        this.state = {
            input:""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        this.setState({input:event.target.value});
    }

    handleSubmit(event) {
        this.setState({input:""});
    }

    render(){

        return(
            
            <form style = {style}>
                <input onChange = {this.handleInputChange} value = {this.state.input}></input>
                <button onClick = {this.handleSubmit}>Submit</button>
            </form>
        )
    }

}


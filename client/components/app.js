var React = require("react");
var InputBox = require("./InputBox.js");

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <InputBox/>
            </div>
        );
    }
}

module.exports = App;
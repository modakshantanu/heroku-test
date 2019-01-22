var path = require("path")

module.exports = function(app){

    

    app.route("/")
        .get(function(req,res){

            console.log("ayyy");
            res.sendFile("./index.html");
        })
}
var app = require("../server/server");


//this file is just to start listening , /server/server is imported
app.listen(process.env.PORT||3000,function(){
    console.log("running");
});
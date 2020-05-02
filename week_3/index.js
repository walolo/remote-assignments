let express = require("express");
let app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static('public'));
app.get("/", function(req, res) {
    res.send("Hello, My Server!");	
});
app.get("/getData", function(req, res) {
	let url = req.url; 
	let value = url.split("=")[1];
	console.log(url);
	if (url == "/getData") {
		res.send("Lack of Parameter");
	} else if (isNaN(value) == true) {
		res.send("Wrong Parameter");
	} else {
		let result = 0;
		for (let i = 0; i <= parseInt(value); i++) {
			result = result + i;
			console.log(result);
		}
		res.send(result.toString());
	}
});
app.get("/myName", function(req, res) {
	console.log(req.cookies);
});
app.listen(3000,function(){
    console.log("localhost:3000");
});

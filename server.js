var express = require('express'),
	root = __dirname,
	port = process.env.PORT || 8000,
	app = express();
	d3 = require("d3");

app.use(express.static(root));

app.listen(port, function() {
	console.log(`server running on port ${port}`);
});
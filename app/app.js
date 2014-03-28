var application_root = __dirname,
	express = require("express"),
	path = require("path"),
	mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/tomatillo");
db = mongoose.connection;

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root,"public")));
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

var Schema = mongoose.Schema;
var Fruit = new Schema({
	"_id": { type: String, required: true }, 
    "name": { type: String, required: true }, 
    "defaultRunTimeMins": { type: Number, required: true }, 
    "deafultBreakTimeMins": { type: Number, required: true }, 
    "defaultImageUrl": { type: String, required: true }, 
    "completedImageUrl":{ type: String, required: true }, 
    "splatImageUrl":{ type: String, required: true }
});
var FruitModel = mongoose.model('fruit',Fruit);

app.get('/api/fruits', function(req,res){
	return FruitModel.find(function(err,fruits) {
		if (!err) {
			return res.send(fruits);
		} else {
			return console.log(err);
		}
	});
});

app.get('/api',function(req, res) {
	res.send('Running..');
});

var server = app.listen(8080, function() { 
	console.log('Running on %d',server.address().port);
});
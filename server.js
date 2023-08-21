let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbconnection');
let router = require('./route/route');


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/city',router);



// app.get('/', function (req,res) {
//     res.render(' index.html');
// });


app.listen(port, ()=>{
    console.log('express server started');
    // runDB();
});
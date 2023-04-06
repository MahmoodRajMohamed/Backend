const express = require('express');
const app = express();
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://Mahmood:Rfosm259@jspractice.nfxb6ev.mongodb.net/?retryWrites=true&w=majority/Devtown',
mongoose.connect('mongodb://Mahmood:Rfosm259@ac-tco170o-shard-00-00.nfxb6ev.mongodb.net:27017,ac-tco170o-shard-00-01.nfxb6ev.mongodb.net:27017,ac-tco170o-shard-00-02.nfxb6ev.mongodb.net:27017/?ssl=true&replicaSet=atlas-9mf2zy-shard-0&authSource=admin&retryWrites=true&w=majority/Devtown',

{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}
).then(()=>{
    console.warn('Db connected successfully');
})








// const reqFilter = require('./middleware.js');

// const requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
//   }



// app.use(requestTime)
// // app.use(reqFilter);

// app.get('/', (req,res) => {
//     res.send(`Welcome Home <br> <a href="./about"> Go to About</a> \n The request time is ${req.requestTime}`);
//     // res.send(`${req.requestTime}`)
// });

// app.get('/about',reqFilter, (req, res) => {
//     res.send('Welcome to about');
// });

// app.get('/profile',(req, res) => {
//     res.send('Welcome to profile');
// });

// app.get('/contact', (req, res) => {
//     res.send('Welcome to contact');
// });


// app.get('/about', (req, res) => {
//     // res.send('<h1>You are in the about page </h1>')
//     res.send(`<input type="text" placeholder="Name" /> <button>Click me</button>
//     <a href="./"><h3> Go to Home</h3></a>
//     `);
// }
// )


// const http = require('http');

// function dataControl(req,res){
//     res.write("Hey Hi, Welcome Mahmood ");
//     res.end();
// }

// http.createServer(dataControl).listen(3000);


/* Importing data from another file */

// const data = require('./data');
// const http = require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'application/json'});
//     res.write(JSON.stringify(data))
// }).listen(3000);

app.listen(3000);
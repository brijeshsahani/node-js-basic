const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on("request", (req,res)=>{

    const rstream = fs.createReadStream("b.txt"); //create read stream 
     rstream.pipe(res); //read and write same time 
});

server.listen(8000,"127.0.0.1");
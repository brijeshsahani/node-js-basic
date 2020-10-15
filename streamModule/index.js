const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on("request", (req,res)=>{

    const rstream = fs.createReadStream("b.txt"); //create read stream 
    rstream.on('data', (chunkdata)=>{//read data
        res.write(chunkdata);
    })
    rstream.on('end', ()=>{ // end data 
        res.end();
    })
    rstream.on('error',()=>{ // when file not found
        console.log("not found");
    })
});

server.listen(8000,"127.0.0.1");
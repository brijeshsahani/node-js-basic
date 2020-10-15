const http = require('http');

const server = http.createServer((req,res)=>{
    

    if(req.url == "/")
    {
        res.end("hello i am your ssrver... brijesh");
    }
    else if(req.url == "/about")
    {
        res.end("about page");
    }
    else if(req.url == "/contact")
    {
        res.end("contact page");
    }
    else
    {
        res.writeHead(404);//show error 404 otherwise success 200
       res.end("not found"); 
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening on portno 8000")
});
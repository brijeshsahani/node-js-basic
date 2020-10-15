const fs = require("fs");


fs.writeFile("asy.txt","hi brijesh", ()=> {
    console.log("created file");
});


fs.appendFile("asy.txt","updated file", ()=> {
    console.log("updated file");
});

fs.readFile("asy.txt","utf-8", (error,data)=> {
    console.log(data);
});
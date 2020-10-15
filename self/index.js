const fs =require('fs');

fs.writeFileSync('read.txt',"hello i am brijesh");

fs.appendFileSync('read.txt',"new added");

fs.renameSync('read.txt','write.txt');

const buf = fs.readFileSync('write.txt');

console.log(buf);



const originaldata = buf.toString();

console.log(originaldata);
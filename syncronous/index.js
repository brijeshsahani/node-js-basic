const fs =require("fs");

//to create new filr or update data in exsiting file

fs.writeFileSync('read.txt',"welcome to file");


// not override add new data

fs.appendFileSync('read.txt',"how r u");

//read file

fs.readFileSync('read.txt');

//show buffer data
const buf_data = fs.readFileSync('read.txt');

console.log(buf_data);

// show original data
org_data = buf_data.toString();
console.log(org_data);

//to rename file name

fs.renameSync('read.txt','raedwrite.txt');

//create folder

fs.mkdirSync('new');


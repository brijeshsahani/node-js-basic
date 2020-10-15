var buffer = Buffer.alloc(8);
buffer.write('Hey!')
console.log(buffer)

var buffer1 = Buffer.from("I'm a string!", "utf-8");
console.log(buffer1);

const buf = Buffer.from('bye!')
console.log(buf[0]) 
console.log(buf[1]) 
console.log(buf[2]) 
console.log(buf.length)
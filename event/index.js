const EventEmitter = require('events'); // class
const event = new EventEmitter(); // object


event.on("show",()=> { //call
    console.log("hi");
});
event.on("show",()=> {  //call
    console.log("hello");
});
event.emit("show"); // create
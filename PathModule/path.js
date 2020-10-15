const path= require('path');

console.log(path.dirname("E:/nodejs/PathModule/path.js"));

console.log(path.extname("E:/nodejs/PathModule/path.js"));
console.log(path.basename("E:/nodejs/PathModule/path.js"));

//show in object
console.log(path.parse("E:/nodejs/PathModule/path.js"));

//access object properties
const oo =  path.parse("E:/nodejs/PathModule/path.js");

console.log(oo.name);
console.log(oo.root);


(function(){
    var a="brijesh";
    console.log(a);
})();
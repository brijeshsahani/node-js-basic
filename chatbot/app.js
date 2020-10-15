Chatbot = require('./Chatbot');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('You ==> ');
rl.prompt();

//r1.on('line',(message)=>{});

rl.on('line', function(message) {
    console.log('Bot ==> '+ Chatbot.ChatbotReply(message));    
    rl.prompt();
}).on('close',function(){  //chaining events.
    process.exit(0);
});
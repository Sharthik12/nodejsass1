const readline = require('readline');

const { getResponse } = require('./chatbot');

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout

});

console.log("📚 Welcome to the Library Assistant Chatbot!");

console.log("Type 'exit' to quit.");

function askQuestion() {

  rl.question("> You: ", (input) => {

    const response = getResponse(input);

    console.log("🤖 Bot:", response);

    if (input.toLowerCase().includes("exit") || input.toLowerCase().includes("bye")) {

      rl.close();

    } else {

      askQuestion(); // continue chatting

    }

  });

}

askQuestion();
            
            
            
            
            

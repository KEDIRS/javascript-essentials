function greetUser(name)// Define a function named 'greetUser' that takes a parameter, 'name'
{
    return `Hello, ${name}! Welcome to JavaScript!`;// i have Used template literals to return a greeting message with the given name.
}

const greetingMessage = greetUser("Kedir");// Call the 'greetUser' function with the argument "Kedir" and store the returned message in the variable 'greetingMessage'.
console.log(greetingMessage);// The greetingMessage will be diplayed to the console.

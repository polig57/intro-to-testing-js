// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if(input === true) {
        return `Hello, World!`
    }
    if(input) {
        return `Hello, ${input}!`
    }
    return 'Hello, World!'
}
function isFive(input) {
    input = Number(input);
    return input === 5;
}
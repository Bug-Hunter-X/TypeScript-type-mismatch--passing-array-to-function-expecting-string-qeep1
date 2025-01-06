function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution: Check the type before calling the function
if (typeof user === 'string') {
  console.log(greeter(user));
} else {
  console.error('Error: Invalid argument type. Expected string, received array.');
}
//Alternative Solution: Change the function to accept an array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(' ');
}
console.log(greeterArray(user));
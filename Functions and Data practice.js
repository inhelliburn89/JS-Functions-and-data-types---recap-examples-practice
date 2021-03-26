// Define a function, name it however you prefer respecting the good naming conventions, that will do the same as we did earlier - loop through the array and print the type of each element of the array in the console.

let guitarLabel = [
  'jackson',
  'gibson',
  'ESP',
  'ibanez',
  'washburn',
  'solar'
  ];

function theseTests(anArr) {
for (let i = 0; i < anArr.length; i++) {
console.log(`${anArr[i]}`);
  }
};

theseTests(guitarLabel);

// Define a function getCredentials() that will receive the following object as argument and print the following result:

let user = {
  username: 'ironhacker',
  password: '123iron345'
};

function getCredentials() {
  
  console.log(`Username is: ${user.username} and the password is: ${user.password}`)
};

getCredentials(user);

//Define a function checkProperty() that will use the following object passed as an argument to print the output in the console:


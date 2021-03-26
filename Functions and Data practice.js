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

let property = {
  owner: {
    firstName: 'John',
    lastName: 'Doe',
    age: 44
  },
  isForSale: true,
  sqrm: 120,
  address: {
    street: 'Happy St',
    number: 123,
    city: 'Miami',
    state: 'FL',
    country: 'US'
  },
  amenities: ['pool', 'tennis court', 'private parking', 'yard']
};
 
// YOUR CODE HERE


function checkProperty(){
     //I first copied and pasted the full text without calling the properties, then found out that it was too easy to do that :c.
 if (property.isForSale === true){
  console.log(`The owner, ${property.owner.firstName} ${property.owner.lastName} put the home for sale! The property has ${property.amenities.length} amenities.`);
 }
  else {
    console.log(`The home in ${property.address.street} no. ${property.address.number} is not for sale.`);
  }
  
}
checkProperty(property);


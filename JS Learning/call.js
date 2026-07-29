const person = {
  firstName: "Vivek",
  lastName: "Kumar"
};

function fullName(city, state) {
  console.log(`${this.firstName} ${this.lastName} - ${city}, ${state}`);
}

const person2 = {
  firstName: "Ayushi",
  lastName: "Sharma"
};

// call -> arguments passed one by one
fullName.call(person2, "Delhi", "DL");

// apply -> arguments passed as an array
fullName.apply(person2, ["Mumbai", "MH"]);

// bind -> creates a new function, does not call immediately
const boundFn = fullName.bind(person2, "Noida", "UP");
boundFn();
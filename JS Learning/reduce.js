const user = [
  { firstName: "vivek", age: 29 },
  { firstName: "ayushi", age: 29 },
  { firstName: "tashvi", age: 1.5 },
  { firstName: "motki maa", age: 53 }
];

const output = user.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc; // Don't forget to return the accumulator!
}, []); // Initial value passed here

console.log(output);
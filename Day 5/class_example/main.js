class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.age = -1;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Jose", "Liera", "05/15/2001");
const person2 = new Person("Elizabeth", "Liera", "06/20/2009");
console.log(person.getFullName(), person2.getFullName());

class Customer extends Person {
  constructor(firstName, lastName, dob, phone, membership) {
    super(firstName, lastName, dob);
    this.phone = phone;
    this.membership = membership;
  }

  static memberCost() {
    return 500;
  }
}

const customer = new Customer(
  "Jose",
  "Liera",
  "05/15/2001",
  "9033057524",
  "Gold"
);

const customer2 = new Customer(
  "Erik",
  "Liera",
  "0000000000",
  "11/14/2005",
  "Platinum"
);
console.log(Customer.memberCost());

// const people = [person, person2, customer, customer2];

// for (let i = 0; i < people.length; i++) {
//     const person2 = people[i];
//     console.log(person.getFullName());
// }

// for (let person of people) {
//   console.log(person.getFullName());
// }

// people.forEach((person, i) => {
//   console.log(person.getFullName(), i);
// });

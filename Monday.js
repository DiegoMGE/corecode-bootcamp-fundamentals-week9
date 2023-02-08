/* ==========
* Exercise 1: "this" is a problem
========== */

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName
}

const test = new NameMe('Diego', 'Orellana');
console.log(test.firstName);
console.log(test.lastName);
console.log(test.name);

/* ==========
* Exercise 2: "Thinkful - List and Loop Drills: Lists of lists"
========== */

/* ==========
* Exercise 3: Stop gninnipS My sdroW!
========== */


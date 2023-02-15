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
function process_data() {
    return data
        .map((number) => {
            return number[0] - number[1];
        })
        .reduce((n1, n2) => {
            return n1 * n2
        });
}

/* ==========
* Exercise 3: Stop gninnipS My sdroW!
========== */
function spinWords(string) {
    let word = string.split(' ');

    for (let i = 0; i < word.length; i++) {
        if (word[i].length >= 5) {
            word[i] = word[i].split('').reverse().join('');
        }
    }
    return word.join(' ');
}

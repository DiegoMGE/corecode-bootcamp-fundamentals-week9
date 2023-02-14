/* ==========
* Exercise 1: "this" is an other problem
========== */
function NamedOne(first, last) {
    this._firstName = first;
    this._lastName = last;

    Object.defineProperties(this, {
        firstName: {
            get: () => {
                return this._firstName;      
            },
            set: (newFirstName) => {
                this._firstName = newFirstName;
            }
        },
        lastName: {
            get: () => {
                return this._lastName;
            },
            set: (newLastName) => {
                this._lastName = newLastName;
            }
        },
        fullName: {
            get: () => {
                return `${this._firstName} ${this._lastName}`
            },
            set: (newFullName) => {
                const newFullNameArray = newFullName.trim().split(' ');
                if (newFullNameArray.length == 2) {
                    this._firstName = newFullNameArray[0];
                    this._lastName = newFullNameArray[1]
                }
            }
        }
    });
}

const test = new NamedOne('Diego', 'Orellana');
console.log(test);
console.log(test.firstName);
console.log(test.lastName);
console.log(test.fullName);
console.log('===== New Name =====')
test.firstName = 'Mark';
test.lastName = '42';
console.log(test.firstName);
console.log(test.lastName);
console.log(test.fullName);

/* ==========
* Exercise 2: "Who likes it?"
========== */
const names = ["Alex", "Jacob", "Mark", "Max"];

function likesCount(names) {
    return (names.length === 1) ? `${names[0]} likes this`
        : (names.length === 2) ? `${names[0]} and ${names[1]} like this`
        : (names.length === 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this`
        : (names.length >= 4) ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
        : 'No one likes this';
}

console.log(likesCount(names));

/* ==========
* Exercise 3: Convert string to camel case
========== */
function toCamelCase(string) {
    let result = ''

    for (let i = 0; i < string.length; i++) {
        if( (string[i - 1] === '-') || (string[i - 1] === '_') ) {
            result += string[i].toUpperCase();
        } else if ( (string[i] !== '-') && (string[i] !== '_') ) {
            result += string[i];
        }
    }
    return result
}

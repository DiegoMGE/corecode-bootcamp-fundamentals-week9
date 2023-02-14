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


/* ==========
* Exercise 3: Convert string to camel case
========== */

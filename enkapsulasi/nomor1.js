// Nomor 1

    class Person {
        #firstName;
        #lastName;
        #age;

        constructor(firstName, lastName, age) {
            this.setFirstName(firstName);
            this.setLastName(lastName);
            this.setAge(age);
        }

        setFirstName(firstName) {
            if (!firstName || firstName.trim() === '') {
                throw new Error('First name tidak boleh kosong');
            }
            this.#firstName = firstName;
        }

        setLastName(lastName) {
            if (!lastName || lastName.trim() === '') {
                throw new Error('Last name tidak boleh kosong');
            }
            this.#lastName = lastName;
        }

        setAge(age) {
            if (age <= 0) {
                throw new Error('Age harus lebih dari nol');
            }
            this.#age = age;
        }

        showDetails() {
            console.log(`${this.#firstName} ${this.#lastName}, Age: ${this.#age}`);
        }
    }

    try {
        const person = new Person("Suwendo", "Wendo", 17);
        person.showDetails();
        console.info(person);
    } catch (error) {
        console.error(error.message);
    }

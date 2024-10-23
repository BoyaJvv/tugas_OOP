// nomor 6

class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.setName(name);
        this.setSalary(salary);
    }

    getName() {
        return this.#name;
    }

    setName(namaBaru) {
        if (typeof namaBaru !== 'string' || namaBaru.trim() === '') {
            throw new Error('Nama harus berupa string dan tidak boleh kosong.');
        }
        this.#name = namaBaru;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(gajiBaru) {
        if (typeof gajiBaru !== 'number' || gajiBaru <= 0) {
            throw new Error('Gaji harus berupa angka dan lebih dari 0.');
        }
        this.#salary = gajiBaru;
    }

    hitungGajiTahunan() {
        return this.getSalary() * 12;
    }

    displayDetails() {
        console.info(`Nama Pegawai: ${this.getName()}`);
        console.info(`Gaji Bulanan: Rp${this.getSalary()}`);
    }
}

class Manager extends Employee {
    #departemen;

    constructor(name, salary, departemen) {
        super(name, salary);
        this.setDepartemen(departemen);
    }

    getDepartemen() {
        return this.#departemen;
    }

    setDepartemen(departemenBaru) {
        if (typeof departemenBaru !== 'string' || departemenBaru.trim() === '') {
            throw new Error('Departemen tidak boleh kosong.');
        }
        this.#departemen = departemenBaru;
    }

    hitungGajiTahunan() {
        const bonus = 0.1 * this.getSalary() * 12;
        return super.hitungGajiTahunan() + bonus;
    }

    displayDetails() {
        super.displayDetails();
        console.info(`Departemen: ${this.getDepartemen()}`);
        console.info(`Bonus (10% dari gaji pokok): 0.1`);
    }
}

try {
    const manager1 = new Manager("Lamira Yunna", 10000000, "Marketing");
    const manager2 = new Manager("Silmi Faris", 15500000, "Marketing");

    manager1.displayDetails();
    console.info(`Gaji Tahunan: Rp${manager1.hitungGajiTahunan()}\n`);

    console.log('');

    manager2.displayDetails();
    console.info(`Gaji Tahunan: Rp${manager2.hitungGajiTahunan()}`);
} catch (error) {
    console.error(error.message);
}

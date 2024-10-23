// nomor 7

class Product {
    #idProduk;
    #name;
    #price;

    constructor(idProduk, name, price) {
        this.#idProduk = idProduk;
        this.setName(name);
        this.setPrice(price);
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

    getPrice() {
        return this.#price;
    }

    setPrice(hargaBaru) {
        if (typeof hargaBaru !== 'number' || hargaBaru <= 0) {
            throw new Error('Harga harus berupa angka dan lebih dari 0.');
        }
        this.#price = hargaBaru;
    }

    hitungTotalHarga(kuantitas) {
        return this.getPrice() * kuantitas;
    }

    tampilkanNama() {
        console.info(`Nama Produk: ${this.getName()}`);
    }
}

class ElectronicProduct extends Product {
    #masaGaransi;

    constructor(idProduk, name, price, masaGaransi) {
        super(idProduk, name, price);
        this.setMasaGaransi(masaGaransi);
    }

    getMasaGaransi() {
        return this.#masaGaransi;
    }

    setMasaGaransi(masaGaransiBaru) {
        if (typeof masaGaransiBaru !== 'number' || masaGaransiBaru <= 0) {
            throw new Error('Masa garansi harus berupa angka dan lebih dari 0.');
        }
        this.#masaGaransi = masaGaransiBaru;
    }

    hitungTotalHarga(kuantitas) {
        const totalHarga = super.hitungTotalHarga(kuantitas);
        console.info(`Masa Garansi: ${this.getMasaGaransi()} tahun`);
        return totalHarga;
    }

    tampilkanNama() {
        super.tampilkanNama();
        console.info(`Masa Garansi: ${this.getMasaGaransi()} tahun`);
    }
}

try {
    const laptop = new ElectronicProduct(101, 'Laptop Gaming', 15000000, 2);
    laptop.tampilkanNama();
    const totalHarga = laptop.hitungTotalHarga(3);
    console.info(`Total Harga untuk 3 unit: Rp${totalHarga}`);
} catch (error) {
    console.error(error.message);
}

try {
    const produkValid = new Product(102, 'Produk A', 15000000);
    console.info(`Produk valid: ${produkValid.getName()}, Harga: Rp${produkValid.getPrice()}`);
} catch (error) {
    console.error(error.message);
}

try {
    const produkInvalid = new Product(103, 'Produk C', 15000000);
} catch (error) {
    console.error(error.message);
}

try {
    const produkInvalid2 = new Product(104, 'Produk B', 15000);
} catch (error) {
    console.error(error.message);
}

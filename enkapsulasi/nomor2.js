// nomor 2

class PersegiPanjang {
    #panjang;
    #lebar;

    constructor(panjang, lebar) {
        this.#panjang = panjang;
        this.#lebar = lebar;
    }

    get panjang() {
        return this.#panjang;
    }

    set panjang(panjangBaru) {
        if (panjangBaru <= 0) {
            throw new Error('Panjang harus lebih besar dari 0.');
        }
        this.#panjang = panjangBaru;
    }

    get lebar() {
        return this.#lebar;
    }

    set lebar(lebarBaru) {
        if (lebarBaru <= 0) {
            throw new Error('Lebar harus lebih besar dari 0.');
        }
        this.#lebar = lebarBaru;
    }

    hitungLuas() {
        return this.#panjang * this.#lebar;
    }

    hitungKeliling() {
        return 2 * (this.#panjang + this.#lebar);
    }
}

const persegiPanjang1 = new PersegiPanjang(10, 5);

console.log(`Panjang: ${persegiPanjang1.panjang}`);
console.log(`Lebar: ${persegiPanjang1.lebar}`);
console.log(`Luas: ${persegiPanjang1.hitungLuas()}`);
console.log(`Keliling: ${persegiPanjang1.hitungKeliling()}`);

persegiPanjang1.panjang = 15;
persegiPanjang1.lebar = 7;

console.log(`Panjang baru: ${persegiPanjang1.panjang}`);
console.log(`Lebar baru: ${persegiPanjang1.lebar}`);
console.log(`Luas baru: ${persegiPanjang1.hitungLuas()}`);
console.log(`Keliling baru: ${persegiPanjang1.hitungKeliling()}`);

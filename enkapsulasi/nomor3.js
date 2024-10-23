
const nomorRekeningSet = new Set();

class RekeningBank {
    #nomorRekening;
    #saldo;

    constructor(nomorRekening, saldo) {
        if (nomorRekeningSet.has(nomorRekening)) {
            throw new Error('Nomor rekening sudah ada, harus unik!');
        }

        nomorRekeningSet.add(nomorRekening);
        this.#nomorRekening = nomorRekening;
        this.#saldo = saldo;
    }

    getNomorRekening() {
        return this.#nomorRekening;
    }

    getSaldo() {
        return this.#saldo;
    }

    setSaldo(saldoBaru) {
        if (saldoBaru < 0) {
            throw new Error('Saldo tidak bisa kurang dari 0.');
        }
        this.#saldo = saldoBaru;
    }

    setorUang(jumlah) {
        this.setSaldo(this.#saldo + jumlah);
        console.log(`Berhasil setor Rp.${jumlah}. Saldo sekarang: Rp.${this.#saldo}`);
    }

    tarikUang(jumlah) {
        if (jumlah > this.#saldo) {
            console.log("Saldo tidak mencukupi untuk penarikan!");
        } else {
            this.setSaldo(this.#saldo - jumlah);
            console.log(`Berhasil tarik Rp.${jumlah}. Saldo sekarang: Rp.${this.#saldo}`);
        }
    }

    tampilkanSaldo() {
        console.log(`Saldo di rekening ${this.#nomorRekening}: Rp.${this.#saldo}`);
    }
}

try {
    const rekening1 = new RekeningBank("5677356", 500000);
    const rekening2 = new RekeningBank("7331273", 1000000);
    const rekening3 = new RekeningBank("1556527", 750000);

    rekening1.setorUang(200000);
    rekening1.tarikUang(150000);
    rekening1.tampilkanSaldo();

    rekening2.setorUang(300000);
    rekening2.tarikUang(500000);
    rekening2.tampilkanSaldo();

    rekening3.setorUang(100000);
    rekening3.tarikUang(200000);
    rekening3.tampilkanSaldo();

    const rekeningDuplikat = new RekeningBank("1234567890", 200000);
} catch (error) {
    console.error(error.message);
}

// nomor 8
        const nomorRekeningSet = new Set();
        const namaNasabahSet = new Set();

        class BankAccount {
            #nomorRekening;
            #namaNasabah;
            #saldo;

            constructor(nomorRekening, namaNasabah, saldoAwal) {
                if (nomorRekeningSet.has(nomorRekening)) {
                    throw new Error('Nomor rekening sudah digunakan!');
                }
                if (namaNasabahSet.has(namaNasabah)) {
                    throw new Error('Nama nasabah sudah digunakan!');
                }

                nomorRekeningSet.add(nomorRekening);
                namaNasabahSet.add(namaNasabah);

                this.#nomorRekening = nomorRekening;
                this.#namaNasabah = namaNasabah;
                this.#saldo = saldoAwal;
            }

            getNomorRekening() {
                return this.#nomorRekening;
            }

            getNamaNasabah() {
                return this.#namaNasabah;
            }

            getSaldo() {
                return this.#saldo;
            }

            setorUang(jumlah) {
                if (jumlah > 0) {
                    this.#saldo += jumlah;
                    console.info(`Setor berhasil. Saldo ${this.getNamaNasabah()} sekarang: Rp${this.getSaldo()}`);
                } else {
                    console.error('Jumlah setor harus lebih dari 0.');
                }
            }

            tarikUang(jumlah) {
                if (jumlah > 0 && jumlah <= this.#saldo) {
                    this.#saldo -= jumlah;
                    console.info(`Tarik berhasil. Saldo ${this.getNamaNasabah()} sekarang: Rp${this.getSaldo()}`);
                } else {
                    console.error(`Tarik gagal. Saldo tidak mencukupi atau jumlah tidak valid.`);
                }
            }

            transferUang(jumlah, penerima) {
                if (jumlah > 0 && jumlah <= this.#saldo) {
                    this.#saldo -= jumlah;
                    penerima.#saldo += jumlah;
                    console.info(`Transfer berhasil. Rp${jumlah} telah ditransfer ke rekening ${penerima.getNamaNasabah()}.`);
                    console.info(`Saldo ${this.getNamaNasabah()} sekarang: Rp${this.getSaldo()}`);
                } else {
                    console.error(`Transfer gagal. Saldo tidak mencukupi atau jumlah tidak valid.`);
                }
            }

            cekSaldo() {
                console.info(`Saldo ${this.getNamaNasabah()}: Rp${this.getSaldo()}`);
            }
        }

        try {
            const rekening1 = new BankAccount(667567378, 'Lamira Yunna', 5000000);
            const rekening2 = new BankAccount(987568764, 'Silmi Faris', 3000000);

            rekening1.setorUang(2000000);
            rekening1.tarikUang(1000000);
            rekening1.transferUang(1500000, rekening2);

            rekening1.cekSaldo();
            rekening2.cekSaldo();

            const rekening3 = new BankAccount(66758658, 'Arif Rahman', 1000000);
        } catch (error) {
            console.error(error.message);
        }
   
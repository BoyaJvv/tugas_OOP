
  // nomor 4

  const namaCabangSet = new Set();

  class Bank {
      #namaBank;
      #kantorCabang;

      constructor(namaBank) {
          this.#namaBank = namaBank;
          this.#kantorCabang = [];
      }

      getNamaBank() {
          return this.#namaBank;
      }

      setNamaBank(namaBaru) {
          if (!namaBaru) {
              throw new Error('Nama bank tidak boleh kosong.');
          }
          this.#namaBank = namaBaru;
      }

      tambahCabang(namaCabang) {
          if (namaCabangSet.has(namaCabang)) {
              console.info(`Kantor cabang "${namaCabang}" sudah ada!`);
          } else {
              this.#kantorCabang.push(namaCabang);
              namaCabangSet.add(namaCabang);
              console.info(`Kantor cabang "${namaCabang}" berhasil ditambahkan.`);
          }
      }

      hapusCabang(namaCabang) {
          const index = this.#kantorCabang.indexOf(namaCabang);
          if (index !== -1) {
              this.#kantorCabang.splice(index, 1);
              namaCabangSet.delete(namaCabang);
              console.info(`Kantor cabang "${namaCabang}" berhasil dihapus.`);
          } else {
              console.info(`Kantor cabang "${namaCabang}" tidak ditemukan.`);
          }
      }

      tampilkanSemuaCabang() {
          console.info(`Daftar Kantor Cabang ${this.#namaBank}:`);
          if (this.#kantorCabang.length > 0) {
              this.#kantorCabang.forEach((cabang, index) => {
                  console.info(`${index + 1}. ${cabang}`);
              });
          } else {
              console.info('Tidak ada kantor cabang.');
          }
      }
  }

  const bankABC = new Bank('Bank ABC');

  bankABC.tambahCabang('Cabang Jakarta');
  bankABC.tambahCabang('Cabang Surabaya');
  bankABC.tambahCabang('Cabang Bandung');

  bankABC.tambahCabang('Cabang Jakarta');

  bankABC.tampilkanSemuaCabang();

  bankABC.hapusCabang('Cabang Surabaya');

  bankABC.tampilkanSemuaCabang();

// nomor 5

        class Book {
            #title;
            #author;
            #year;

            constructor(title, author, year) {
                this.#title = title;
                this.#author = author;
                this.#year = year;
            }

            getTitle() {
                return this.#title;
            }

            setTitle(newTitle) {
                if (!newTitle) {
                    throw new Error("Judul tidak boleh kosong.");
                }
                this.#title = newTitle;
            }

            getAuthor() {
                return this.#author;
            }

            setAuthor(newAuthor) {
                if (!newAuthor) {
                    throw new Error("Penulis tidak boleh kosong.");
                }
                this.#author = newAuthor;
            }

            getYear() {
                return this.#year;
            }

            setYear(newYear) {
                if (isNaN(newYear) || newYear <= 0) {
                    throw new Error("Tahun harus berupa angka yang valid.");
                }
                this.#year = newYear;
            }

            bookDetails() {
                console.log(`Judul: ${this.getTitle()}`);
                console.log(`Penulis: ${this.getAuthor()}`);
                console.log(`Tahun: ${this.getYear()}`);
            }
        }

        class Ebook extends Book {
            #harga;

            constructor(title, author, year, harga) {
                super(title, author, year);
                this.#harga = harga;
            }

            getHarga() {
                return this.#harga;
            }

            setHarga(newHarga) {
                if (isNaN(newHarga) || newHarga <= 0) {
                    throw new Error("Harga harus berupa angka dan lebih besar dari 0.");
                }
                this.#harga = newHarga;
            }

            bookDetails() {
                super.bookDetails();
                console.info(`Harga: Rp${this.getHarga()}`);
            }
        }

        function validateEbook(title, author, year, harga) {
            if (!title) {
                throw new Error("Judul tidak boleh kosong.");
            }
            if (isNaN(harga) || typeof harga !== "number") {
                throw new Error("Harga harus berupa angka.");
            }
        }

        try {
            const title = "Belajar JavaScript"; 
            const author = "John Doe"; 
            const year = 2023; 
            const harga = 150000; 

            validateEbook(title, author, year, harga);

            const ebook1 = new Ebook(title, author, year, harga);

            ebook1.setTitle("Belajar JS Lanjutan");
            ebook1.setHarga(175000);

            ebook1.bookDetails();
        } catch (error) {
            console.error(error.message);
        }
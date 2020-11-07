// Constructpr adalah sebuah method yang akan langsung berjalan ketika sebuah class di instasiasi

class Kucing2 {
  nama;
  kaki;

  constructor(nama, kaki) {
    this.nama = nama;
    this.kaki = kaki;
  }

  berjalan() {
    console.log(`Hallo nama saya ${this.nama} kaki saya ${this.kaki}`);
  }
}

const kucing2 = new Kucing2('Langit', 4);

kucing2.berjalan();

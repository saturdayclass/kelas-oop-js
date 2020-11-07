// class, blueprint ataupun kerangka yang nantikan akan menjadi sebuah object ketika di instasiasi.

// Property dan method, instasiasi

class Kucing {
  // Property
  mata = 2;
  kaki = 4;
  nama = 'Langit';

  // Method
  berjalan() {
    console.log(
      `Hallo, nama saya ${this.nama} mata saya ${this.mata} kaki saya ${this.kaki}`
    );
  }
}

// Instasiasi class
const kucing = new Kucing();
kucing.berjalan();

// function Hello(){
//   nama = 'Langit';
//   console.log(`Hallo, nama saya ${this.nama}`)
// }

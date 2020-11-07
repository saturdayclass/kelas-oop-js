// Dengan menggunkan static property dan method, kita bisa langsung mengakses property dan method tsb secara langsung tanpa harus class tsb di instasiasi.

class Person {
  static nama = 'Raihan';

  static kenalan() {
    console.log(`Hallo nama saya ${this.nama}`);
  }
}

Person.kenalan();

console.log(Person.nama);

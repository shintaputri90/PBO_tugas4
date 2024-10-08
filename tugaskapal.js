class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infokapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang}m x ${this.lebar}m.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitaspenumpang, hargaTiket) {
        super(nama, jenis, panjang, lebar);
        this.kapasitaspenumpang = kapasitaspenumpang;
        this.hargaTiket = hargaTiket;
        this.jumlahTiket = kapasitaspenumpang; 
    }

    infokapal() {
        return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitaspenumpang} orang dan harga tiket Rp${this.hargaTiket}.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKargo) {
        super(nama, "kargo", panjang, lebar);
        this.kapasitasKargo = kapasitasKargo;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal kargo yang berukuran ${this.panjang}m x ${this.lebar}m dan mampu membawa ${this.kapasitasKargo} ton barang.`;
    }
}

class KapalCepat extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, kecepatanMax) {
        super(nama, "kapal cepat", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.kecepatanMax = kecepatanMax;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal cepat dengan kapasitas ${this.kapasitaspenumpang} penumpang. Kecepatan maksimum kapal ini adalah ${this.kecepatanMax} knot. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

class KapalLayananVIP extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, fasilitasVIP) {
        super(nama, "kapal layanan VIP", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.fasilitasVIP = fasilitasVIP;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal VIP dengan kapasitas ${this.kapasitaspenumpang} penumpang. Fasilitas yang tersedia: ${this.fasilitasVIP.join(", ")}. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

class KapalPesiar extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, fasilitasHiburan) {
        super(nama, "kapal pesiar", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.fasilitasHiburan = fasilitasHiburan;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal pesiar mewah dengan kapasitas ${this.kapasitaspenumpang} penumpang. Fasilitas hiburan: ${this.fasilitasHiburan.join(", ")}. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

class KapalSailboat extends Kapal {
    constructor(nama, panjang, lebar, jenisLayar) {
        super(nama, "sailboat", panjang, lebar);
        this.jenisLayar = jenisLayar;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah sailboat berukuran ${this.panjang}m x ${this.lebar}m dengan jenis layar ${this.jenisLayar}.`;
    }
}

class KapalTugboat extends Kapal {
    constructor(nama, panjang, lebar, dayaTarik) {
        super(nama, "tugboat", panjang, lebar);
        this.dayatarik = dayaTarik;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah tugboat berukuran ${this.panjang}m x ${this.lebar}m dengan daya tarik ${this.dayatarik} ton.`;
    }
}

class KapalBermotor extends Kapal {
    constructor(nama, panjang, lebar, dayaMesin) {
        super(nama, "kapal bermotor", panjang, lebar);
        this.dayaMesin = dayaMesin;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal bermotor berukuran ${this.panjang}m x ${this.lebar}m dengan daya mesin ${this.dayaMesin} HP.`;
    }
}

class KapalKecil extends Kapal {
    constructor(nama, panjang, lebar, jenisKecil) {
        super(nama, "kapal kecil", panjang, lebar);
        this.jenisKecil = jenisKecil;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal kecil berukuran ${this.panjang}m x ${this.lebar}m dengan jenis ${this.jenisKecil}.`;
    }
}

class KapalSailboatKecil extends KapalSailboat {
    constructor(nama, panjang, lebar, jenisLayar, kapasitas) {
        super(nama, panjang, lebar, jenisLayar);
        this.kapasitas = kapasitas;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas: ${this.kapasitas} orang.`;
    }
}

class KapalTugboatBesar extends KapalTugboat {
    constructor(nama, panjang, lebar, dayaTarik, kapasitas) {
        super(nama, panjang, lebar, dayaTarik);
        this.kapasitas = kapasitas;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas: ${this.kapasitas} ton barang.`;
    }
}

class KapalBermotorKecil extends KapalBermotor {
    constructor(nama, panjang, lebar, dayaMesin, kapasitas) {
        super(nama, panjang, lebar, dayaMesin);
        this.kapasitas = kapasitas;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas: ${this.kapasitas} orang.`;
    }
}

class KapalKecilLaut extends KapalKecil {
    constructor(nama, panjang, lebar, jenisKecil, kapasitas) {
        super(nama, panjang, lebar, jenisKecil);
        this.kapasitas = kapasitas;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas: ${this.kapasitas} orang.`;
    }
}

const kapal1 = new KapalPenumpang("Kapal Pelni", "penumpang", 120, 25, 200, 500000);
const kapal2 = new KapalKargo("Kapal Kargo 1", 150, 30, 1000);
const kapal3 = new KapalCepat("Kapal Cepat 1", 80, 15, 100, 200000, 45);
const kapal4 = new KapalLayananVIP("Kapal VIP 1", 100, 20, 50, 1000000, ["Lounge", "Makanan Khusus"]);
const kapal5 = new KapalPesiar("Kapal Pesiar 1", 200, 30, 150, 1500000, ["Kolam Renang", "Spa"]);

const kapalSailboat = new KapalSailboat("Sailboat 1", 30, 8, "Layar Persegi");
const kapalTugboat = new KapalTugboat("Tugboat 1", 40, 12, 600);
const kapalBermotor = new KapalBermotor("Bermotor 1", 25, 6, 300);
const kapalKecil = new KapalKecil("Kecil 1", 15, 5, "Kecil");
const kapalSailboatKecil = new KapalSailboatKecil("Sailboat Kecil 1", 10, 3, "Layar Segitiga", 4);
const kapalTugboatBesar = new KapalTugboatBesar("Tugboat Besar 1", 50, 15, 1200, 800);
const kapalBermotorKecil = new KapalBermotorKecil("Bermotor Kecil 1", 12, 4, 150, 2);
const kapalKecilLaut = new KapalKecilLaut("Kecil Laut 1", 8, 2, "Kecil Laut", 3);

console.log(kapal1.infokapal());
console.log(kapal2.infokapal());
console.log(kapal3.infokapal());
console.log(kapal4.infokapal());
console.log(kapal5.infokapal());
console.log(kapalSailboat.infokapal());
console.log(kapalTugboat.infokapal());
console.log(kapalBermotor.infokapal());
console.log(kapalKecil.infokapal());
console.log(kapalSailboatKecil.infokapal());
console.log(kapalTugboatBesar.infokapal());
console.log(kapalBermotorKecil.infokapal());
console.log(kapalKecilLaut.infokapal());

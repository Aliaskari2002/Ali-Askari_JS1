//contoh untuk if,else, dan if bersarang

let cuaca = "cerah";
let suhu = 34;

if (cuaca === "cerah") {
    if (suhu > 36) {
        console.log("hair ini panas nya gak ngotak anjay");
    } else {
        console.log("hari ini sih aman dipakai buat jalan walaupun agak panas dikit");
    }
} else {
    console.log("mending turu, karena bakal hujan");
}


// contoh dari stiwh case
let menu = "nasi kuning";

switch (menu) {
    case "nasi kuning":
        console.log("kamu akan nasi kuning.");
        break;
    case "mie goreng":
        console.log("kamu akan mie goreng.");
        break;
    case "ayam bakar":
        console.log("kamu akan ayam bakar.");
        break;
    case "soto ayam":
        console.log("kamu akan soto ayam.");
        break;
    default:
        console.log("Menu nya habis guys, silahkan pilih menu yang ada atau  kamu yang oindah dari warung kami. whehehe");
        break;
}


// contoh dari for

let panjangsegitiga = 5;

for (var i = 1; i <= panjangsegitiga; i++) {
    var bintang = '';
    for (var j = 1; j <= i; j++) {
        bintang += '* ';
    }
    console.log(bintang);
}


// contoh dari while dan do while

let angka = 1;

while (angka <= 10) {
    console.log("tes: " + angka);
    angka++;
}

let angkadw = 1;

do {
    console.log("Nilai angka: " + angkadw);
    angkadw++;
} while (angkadw <= 10);


//contoh dari fungsion

function pertambahan(Nilaia , nilaib) {
    hasil = Nilaia + nilaib;
    return hasil;
}
console.log('hasil dari fungsi pertambahan dia atas = ' + pertambahan(5,5));

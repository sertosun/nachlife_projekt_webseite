const hesapla = document.getElementById("btn");
const ogrenciSayisi = document.getElementById("ogrenciSayi");
const zaman = document.getElementById("zaman");



let kisiFiyat ;
let sayi=0 ;
let derszamani;
let odemesekli ;
let kardesindirimi=0;
let haftaindirimi=0;
let pesinindirimi=0;
let totalindirim=0;
let totaltutar=0;


function ogrenciSayisiGoster() {
  let kayitUcreti = 120;
 
  const secim = ogrenciSayisi.options[ogrenciSayisi.selectedIndex].textContent;

  if (secim == 1) {
    kayitUcreti * 1;
    sayi=1
    kisiFiyat = kayitUcreti*1 ;
    kardesindirimi=0
  } else if (secim == 2) {
    sayi=2
    kisiFiyat = kayitUcreti * 2 ;
    kardesindirimi=(kisiFiyat/100)*10
  } else if (secim == 3) {
    sayi=3
      kisiFiyat= kayitUcreti*3 ;
      kardesindirimi=(kisiFiyat/100)*15
   
  }
}

function zamanGoster() {
 
  const secim = zaman.options[zaman.selectedIndex].textContent;
  
  if (secim === "Wochentag") {

    derszamani = "Wochentag";
    haftaindirimi=(kisiFiyat/100)*5
  } else if (secim === "Wochenende") {
    derszamani = "Wochenende";
    haftaindirimi=0
  }
}

function odemeGoster() {
 
  const secim = odeme.options[odeme.selectedIndex].textContent;
  
  if (secim ==="Vorauszahlung") {
    odemesekli= "Vorauszahlung";
    pesinindirimi=(kisiFiyat/100)*10
  } else if (secim === "3 Raten") {
    odemesekli= "3 Raten";
    pesinindirimi=0
  } else if (secim === "12 Raten") {
    odemesekli = "12 Raten";
  }
}


hesapla.addEventListener("click", () => {

 
 kisi.innerHTML="Schuler: "+sayi+" (" +kisiFiyat+"€)"
 hafta.innerHTML=derszamani
 odemeler.innerHTML=odemesekli
 kardesindirim.innerHTML=kardesindirimi+"€"
 haftaindirim.innerHTML= haftaindirimi+"€"
 pesinindirim.innerHTML=pesinindirimi+"€"
toplamtutar.innerHTML=kisiFiyat+"€"
totalindirim=kardesindirimi+haftaindirimi+pesinindirimi
toplamindirim.innerHTML="Totaler Rabatt: "+totalindirim+"€"
toplamborc.innerHTML="Gesamtschulden: "+(kisiFiyat-totalindirim)+"€"
 
})
;

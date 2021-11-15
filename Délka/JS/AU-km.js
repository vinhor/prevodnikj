window.onload = function () {
  let inputau = document.getElementById("au");
  let bau = document.getElementById("bau");
  let inputkm = document.getElementById("km");
  let bkm = document.getElementById("bkm");
  let naparsovano;
  let vysledek;
  let astronomickaJednotka = 1.495979e8;

  function auToKm() {
    inputau = inputau.value.trim();
    naparsovano = parseFloat(inputau);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano * astronomickaJednotka;
      alert(naparsovano + " AU je " + vysledek + " km");
    }
    inputau = document.getElementById("au");
    naparsovano = null;
  }
  function kmToAu() {
    inputkm = inputkm.value.trim();
    naparsovano = parseFloat(inputkm);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano / astronomickaJednotka;
      alert(naparsovano + " km je " + vysledek + " AU");
    }
    inputkm = document.getElementById("km");
    naparsovano = null;
  }
  bau.onclick = auToKm;
  bkm.onclick = kmToAu;
};

window.onload = function () {
  let inputnm = document.getElementById("nm");
  let bnm = document.getElementById("bnm");
  let inputkm = document.getElementById("km");
  let bkm = document.getElementById("bkm");
  let naparsovano;
  let vysledek;

  function nmToKm() {
    inputnm = inputnm.value.trim();
    naparsovano = parseFloat(inputnm);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano * 1.853;
      alert(naparsovano + " n. m. je " + vysledek + " km");
    }
    inputnm = document.getElementById("nm");
    naparsovano = null;
  }
  function kmToNm() {
    inputkm = inputkm.value.trim();
    naparsovano = parseFloat(inputkm);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano / 1.853;
      alert(naparsovano + " km je " + vysledek + " n. m.");
    }
    inputkm = document.getElementById("km");
    naparsovano = null;
  }
  bnm.onclick = nmToKm;
  bkm.onclick = kmToNm;
};

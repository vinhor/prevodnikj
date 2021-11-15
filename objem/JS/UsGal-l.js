window.onload = function () {
  let inputUsaGal = document.getElementById("UsaGal");
  let bUsaGal = document.getElementById("bUsaGal");
  let inputl = document.getElementById("l");
  let bl = document.getElementById("bl");
  let naparsovano;
  let vysledek;

  function usaGalToL() {
    inputUsaGal = inputUsaGal.value.trim();
    naparsovano = parseFloat(inputUsaGal);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano * 3.785;
      alert(naparsovano + " USA gal je " + vysledek + " l");
    }
    inputUsaGal = document.getElementById("UsaGal");
    naparsovano = null;
  }
  function lToUsaGal() {
    inputl = inputl.value.trim();
    naparsovano = parseFloat(inputl);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano / 3.785;
      alert(naparsovano + " l je " + vysledek + " USA gal");
    }
    inputl = document.getElementById("l");
    naparsovano = null;
  }
  bUsaGal.onclick = usaGalToL;
  bl.onclick = lToUsaGal;
};

window.onload = function () {
  let inputft = document.getElementById("ft");
  let bft = document.getElementById("bft");
  let inputcm = document.getElementById("cm");
  let bcm = document.getElementById("bcm");
  let naparsovano;
  let vysledek;

  function ftToCm() {
    inputft = inputft.value.trim();
    naparsovano = parseFloat(inputft);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano * 0.3048;
      alert(naparsovano + " ft je " + vysledek + " m");
    }
    inputft = document.getElementById("ft");
    naparsovano = null;
  }
  function cmToFt() {
    inputcm = inputcm.value.trim();
    naparsovano = parseFloat(inputcm);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano / 0.3048;
      alert(naparsovano + " m je " + vysledek + " ft");
    }
    inputcm = document.getElementById("inputcm")
    naparsovano = null;
  }
  bft.onclick = ftToCm;
  bcm.onclick = cmToFt;
};

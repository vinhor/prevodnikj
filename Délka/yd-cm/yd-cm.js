window.onload = function () {
  let inputyd = document.getElementById("yd");
  let byd = document.getElementById("byd");
  let inputcm = document.getElementById("cm");
  let bcm = document.getElementById("bcm");
  let naparsovano;
  let vysledek;

  function ydToCm() {
    inputyd = inputyd.value.trim();
    naparsovano = parseFloat(inputyd);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano * 91.44;
      alert(naparsovano + " yd je " + vysledek + " cm");
    }
    inputyd = document.getElementById("yd");
    naparsovano = null;
  }

  function cmToYd() {
    inputcm = inputcm.value.trim();
    naparsovano = parseFloat(inputcm);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano / 91.44;
      alert(naparsovano + " cm je je " + vysledek + " yd");
    }
    inputcm = document.getElementById("cm");
    naparsovano = null;
  }
  byd.onclick = ydToCm;
  bcm.onclick = cmToYd;
};

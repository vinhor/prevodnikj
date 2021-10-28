window.onload = function () {
  let inputin = document.getElementById("in");
  let bin = document.getElementById("bin");
  let inputcm = document.getElementById("cm");
  let bcm = document.getElementById("bcm");
  let naparsovano;
  let vysledek;

  function inToCm() {
    inputin = inputin.value.trim();
    naparsovano = parseFloat(inputin);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano * 2.54;
      alert(naparsovano + " in je " + vysledek + " cm");
      inputin = document.getElementById("in");
      naparsovano = null;
    }
  }
  function cmToIn() {
    inputcm = inputcm.value.trim();
    naparsovano = parseFloat(inputcm);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!")
    }
    else {
        vysledek = naparsovano / 2.54;
        alert(naparsovano + " cm je " + vysledek + " in")
        inputcm = document.getElementById("cm")
    }
  }
  bin.onclick = inToCm;
  bcm.onclick = cmToIn;
};

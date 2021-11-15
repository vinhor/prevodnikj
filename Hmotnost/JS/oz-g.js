window.onload = function () {
  let inputoz = document.getElementById("oz");
  let boz = document.getElementById("boz");
  let inputg = document.getElementById("g");
  let bg = document.getElementById("bg");
  let naparsovano;
  let vysledek;

  function ozToG() {
    inputoz = inputoz.value.trim();
    naparsovano = parseFloat(inputoz);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano * 28.35;
      alert(naparsovano + " oz je " + vysledek + " g");
    }
    inputoz = document.getElementById("oz");
    naparsovano = null;
  }
  function gToOz() {
    inputg = inputg.value.trim();
    naparsovano = parseFloat(inputg);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
        vysledek = naparsovano / 28.35;
        alert(naparsovano + " g je " + vysledek + " oz")
    }
    inputg = document.getElementById("g")
    naparsovano = null;
  }
  boz.onclick = ozToG;
  bg.onclick = gToOz;
};

window.onload = function () {
  let inputmi = document.getElementById("mi");
  let bmi = document.getElementById("bmi");
  let inputkm = document.getElementById("km");
  let bkm = document.getElementById("bkm");
  let naparsovano;
  let vysledek;

  function miToKm() {
    inputmi = inputmi.value.trim();
    naparsovano = parseFloat(inputmi);
    if (isNaN(naparsovano) || naparsovano == null) {
      alert("Nezadali jste číslo!");
    } else {
      vysledek = naparsovano * 1.6093;
      alert(naparsovano + " mi je " + vysledek + " km");
    }
    inputmi = document.getElementById("mi");
    naparsovano = null;
  }
  function kmToMi() {
      inputkm = inputkm.value.trim();
      naparsovano = parseFloat(inputkm);
      if (isNaN(naparsovano) || naparsovano == null) {
          alert("Nezadali jste číslo!");
      }
      else {
          vysledek = naparsovano / 1.6093;
          alert(naparsovano + " km je " + vysledek + " mi");
      }
      inputkm = document.getElementById("km")
      naparsovano = null;
  }
};

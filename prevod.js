class Prevod {
  constructor(hodnota) {
    this.hodnota = hodnota;
  }

  prevod() {
    let vysledek;
    let naparsovanoVlevo;
    let naparsovanoVpravo;

    naparsovanoVlevo = parseFloat(vlevo.value.trim());
    naparsovanoVpravo = parseFloat(vpravo.value.trim());
    if (isNaN(naparsovanoVlevo)) {
      naparsovanoVlevo = null;
    } else if (isNaN(naparsovanoVpravo)) {
      naparsovanoVpravo = null;
    }
    if (naparsovanoVlevo !== null && naparsovanoVpravo === null) {
      if (isNaN(naparsovanoVlevo)) {
        upozorneni.innerHTML = "Nezadali jste číslo!";
      } else {
        vysledek = naparsovanoVlevo * this.hodnota;
        vpravo.value = vysledek;
      }
    } else if (naparsovanoVpravo !== null && naparsovanoVlevo === null) {
      if (isNaN(naparsovanoVpravo)) {
        upozorneni.innerHTML = "Nezadali jste číslo!";
      } else {
        vysledek = naparsovanoVpravo / this.hodnota;
        vlevo.value = vysledek;
      }
    } else if (naparsovanoVpravo === null && naparsovanoVlevo === null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    }
  }
}

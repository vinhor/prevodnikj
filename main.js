window.onload = function () {
  let slctDelka = document.getElementById("slctDelka");
  let slctHmotnost = document.getElementById("slctHmotnost");
  let slctObjem = document.getElementById("slctObjem");
  let slctObsah = document.getElementById("slctObsah");
  let slctRychlost = document.getElementById("slctRychlost");
  let slctTeplota = document.getElementById("slctTeplota");
  let btnDelka = document.getElementById("btnDelka");
  let btnHmotnost = document.getElementById("btnHmotnost");
  let btnObjem = document.getElementById("btnObjem");
  let btnObsah = document.getElementById("btnObsah");
  let btnRychlost = document.getElementById("btnRychlost");
  let btnTeplota = document.getElementById("btnTeplota");
  let pInput = document.getElementById("pInput");
  let inpHodnota = document.getElementById("inpHodnota");
  let upozorneni = document.getElementById("upozorneni");
  let btnPrevod = document.getElementById("btnPrevod");
  let divt = document.getElementById("divt");
  let br = document.createElement("br");
  let br2 = document.createElement("br");
  let br3 = document.createElement("br");
  let br4 = document.createElement("br");
  let br5 = document.createElement("br");
  let svetelny = 9.46073e12;
  let astronomicka = 1.495979e8;
  let vysledek;
  let naparsovano;

  if (window.innerWidth < 475) {
    divt.className = "malatlacitka";
    divt.insertBefore(br, btnTeplota);
    divt.insertBefore(br2, btnHmotnost);
    divt.insertBefore(br3, btnObjem);
    divt.insertBefore(br4, btnObsah);
    divt.insertBefore(br5, btnRychlost);
  } else {
    divt.className = "tlacitka";
  }

  btnDelka.onclick = function () {
    slctDelka.style.display = "inline";
    slctHmotnost.style.display = "none";
    slctObjem.style.display = "none";
    slctObsah.style.display = "none";
    slctRychlost.style.display = "none";
    slctTeplota.style.display = "none";
    btnDelka.className = "one aktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    if ((pInput.style.display = "none")) {
      pInput.style.display = "inline";
    }
    btnPrevod.onclick = vyberDelka;
  };

  btnHmotnost.onclick = function () {
    slctDelka.style.display = "none";
    slctHmotnost.style.display = "inline";
    slctObjem.style.display = "none";
    slctObsah.style.display = "none";
    slctRychlost.style.display = "none";
    slctTeplota.style.display = "none";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two aktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    if ((pInput.style.display = "none")) {
      pInput.style.display = "inline";
    }
    btnPrevod.onclick = vyberHmotnost;
  };

  btnObjem.onclick = function () {
    slctDelka.style.display = "none";
    slctHmotnost.style.display = "none";
    slctObjem.style.display = " inline";
    slctObsah.style.display = "none";
    slctRychlost.style.display = "none";
    slctTeplota.style.display = "none";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three aktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    if ((pInput.style.display = "none")) {
      pInput.style.display = "inline";
    }
    btnPrevod.onclick = vyberObjem;
  };

  btnObsah.onclick = function () {
    slctDelka.style.display = "none";
    slctHmotnost.style.display = "none";
    slctObjem.style.display = "none";
    slctObsah.style.display = "inline";
    slctRychlost.style.display = "none";
    slctTeplota.style.display = "none";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four aktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    if ((pInput.style.display = "none")) {
      pInput.style.display = "inline";
    }
  };

  btnRychlost.onclick = function () {
    slctDelka.style.display = "none";
    slctHmotnost.style.display = "none";
    slctObjem.style.display = "none";
    slctObsah.style.display = "none";
    slctRychlost.style.display = "inline";
    slctTeplota.style.display = "none";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five aktivni";
    btnTeplota.className = "six neaktivni";
    if ((pInput.style.display = "none")) {
      pInput.style.display = "inline";
    }
  };

  btnTeplota.onclick = function () {
    slctDelka.style.display = "none";
    slctHmotnost.style.display = "none";
    slctObjem.style.display = "none";
    slctObsah.style.display = "none";
    slctRychlost.style.display = "none";
    slctTeplota.style.display = "inline";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six aktivni";
    if ((pInput.style.display = "none")) {
      pInput.style.display = "inline";
    }
  };

  function vyberDelka() {
    if (slctDelka.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctDelka.value == 1) {
      inNaCm();
    } else if (slctDelka.value == 2) {
      ftNaM();
    } else if (slctDelka.value == 3) {
      ydNaM();
    } else if (slctDelka.value == 4) {
      miNaKm();
    } else if (slctDelka.value == 5) {
      nmNaKm();
    } else if (slctDelka.value == 6) {
      lyNaKm();
    } else if (slctDelka.value == 7) {
      auNaKm();
    } else if (slctDelka.value == 8) {
      cmNaIn();
    } else if (slctDelka.value == 9) {
      mNaFt();
    } else if (slctDelka.value == 10) {
      mNaYd();
    } else if (slctDelka.value == 11) {
      kmNaMi();
    } else if (slctDelka.value == 12) {
      kmNaNm();
    } else if (slctDelka.value == 13) {
      kmNaLy();
    } else if (slctDelka.value == 14) {
      kmNaAu();
    }
  }

  function vyberHmotnost() {
    if (slctHmotnost.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctHmotnost.value == 1) {
      ozNaG();
    } else if (slctHmotnost.value == 2) {
      lbNaKg();
    } else if (slctHmotnost.value == 3) {
      gNaOz();
    } else if (slctHmotnost.value == 4) {
      kgNaLb();
    }
  }

  function vyberObjem() {
    if (slctObjem.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctObjem.value == 1) {
      usaGalNaL();
    } else if (slctObjem.value == 2) {
      ukGalNaL();
    } else if (slctObjem.value == 3) {
      usaPtNaL();
    } else if (slctObjem.value == 4) {
      ukPtNaL();
    } else if (slctObjem.value == 5) {
      lNaUsaGal();
    } else if (slctObjem.value == 6) {
      lNaUkGal();
    } else if (slctObjem.value == 7) {
      lNaUsaPt();
    } else if (slctObjem.value == 8) {
      lNaUkPt();
    }
  }

  function inNaCm() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 2.54;
      upozorneni.innerHTML = naparsovano + " in je " + vysledek + " cm";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function ftNaM() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 0.3048;
      upozorneni.innerHTML = naparsovano + " ft je " + vysledek + " m";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function ydNaM() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 0.9144;
      upozorneni.innerHTML = naparsovano + " yd je " + vysledek + " m";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function miNaKm() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 1.609344;
      upozorneni.innerHTML = naparsovano + " mi je " + vysledek + " km";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function nmNaKm() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 1.852001;
      upozorneni.innerHTML = naparsovano + " n. m. je " + vysledek + " km";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function lyNaKm() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * svetelny;
      upozorneni.innerHTML = naparsovano + " ly je " + vysledek + " km";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function auNaKm() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * astronomicka;
      upozorneni.innerHTML = naparsovano + " AU je " + vysledek + " km";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function cmNaIn() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 2.54;
      upozorneni.innerHTML = naparsovano + " cm je " + vysledek + " in";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function mNaFt() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 0.3048;
      upozorneni.innerHTML = naparsovano + " m je " + vysledek + " ft";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function mNaYd() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 0.9144;
      upozorneni.innerHTML = naparsovano + " m je " + vysledek + " yd";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function kmNaMi() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 1.609344;
      upozorneni.innerHTML = naparsovano + " km je " + vysledek + " mi";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function kmNaNm() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 1.852001;
      upozorneni.innerHTML = naparsovano + " km je " + vysledek + " n. m.";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function kmNaLy() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / svetelny;
      upozorneni.innerHTML = naparsovano + " km je " + vysledek + " ly";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function kmNaAu() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / astronomicka;
      upozorneni.innerHTML = naparsovano + " km je " + vysledek + " AU";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function ozNaG() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 28.34952;
      upozorneni.innerHTML = naparsovano + " oz je " + vysledek + " g";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function lbNaKg() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 0.4535924;
      upozorneni.innerHTML = naparsovano + " lb je " + vysledek + " kg";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function gNaOz() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 28.34952;
      upozorneni.innerHTML = naparsovano + " g je " + vysledek + " oz";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function kgNaLb() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 0.4535924;
      upozorneni.innerHTML = naparsovano + " kg je " + vysledek + " lb";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function usaGalNaL() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 3.7854;
      upozorneni.innerHTML = naparsovano + " USA gal je " + vysledek + " l";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function ukGalNaL() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 4.54609;
      upozorneni.innerHTML = naparsovano + " UK gal je " + vysledek + " l";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function usaPtNaL() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 0.47317648;
      upozorneni.innerHTML = naparsovano + " USA pt je " + vysledek + " l";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function ukPtNaL() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 0.56826125;
      upozorneni.innerHTML = naparsovano + " UK pt je " + vysledek + " l";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function lNaUsaGal() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 3.7854;
      upozorneni.innerHTML = naparsovano + " l je " + vysledek + " USA gal";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function lNaUkGal() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 4.54609;
      upozorneni.innerHTML = naparsovano + " l je " + vysledek + " UK gal";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function lNaUsaPt() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 0.47317648;
      upozorneni.innerHTML = naparsovano + " l je " + vysledek + " USA pt";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }

  function lNaUkPt() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano / 0.56826125;
      upozorneni.innerHTML = naparsovano + " l je " + vysledek + " UK pt";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }
};

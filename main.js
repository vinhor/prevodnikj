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
  let svetelny = 9.46073e12;
  let astronomicka = 1.495979e8;
  let vysledek;
  let naparsovano;

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
};

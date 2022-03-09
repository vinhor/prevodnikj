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
  let upozorneni = document.getElementById("upozorneni");
  let btnPrevod = document.getElementById("btnPrevod");
  let divt = document.getElementById("divt");
  let br = document.createElement("br");
  let br2 = document.createElement("br");
  let br3 = document.createElement("br");
  let br4 = document.createElement("br");
  let br5 = document.createElement("br");
  let lvlevo = document.getElementById("lvlevo");
  let lvpravo = document.getElementById("lvpravo");
  let vysledek;
  let naparsovanoVlevo;
  let naparsovanoVpravo;

  slctDelka.value = 0;
  slctHmotnost.value = 0;
  slctObjem.value = 0;
  slctObsah.value = 0;
  slctRychlost.value = 0;
  slctTeplota.value = 0;

  vlevo.value = null;
  vpravo.value = null;

  vlevo.onfocus = function () {
    vpravo.value = null;
  };

  vpravo.onfocus = function () {
    vlevo.value = null;
  };

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
    btnPrevod.onclick = vyberObsah;
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
      btnPrevod.onclick = vyberRychlost;
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
    btnPrevod.onclick = vyberTeplota;
  };

  slctDelka.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    if (slctDelka.value == 0) {
      lvlevo.innerHTML = "";
      lvpravo.innerHTML = "";
    } else if (slctDelka.value == 1) {
      lvlevo.innerHTML = "in";
      lvpravo.innerHTML = "cm";
    } else if (slctDelka.value == 2) {
      lvlevo.innerHTML = "ft";
      lvpravo.innerHTML = "m";
    } else if (slctDelka.value == 3) {
      lvlevo.innerHTML = "yd";
      lvpravo.innerHTML = "m";
    } else if (slctDelka.value == 4) {
      lvlevo.innerHTML = "mi";
      lvpravo.innerHTML = "km";
    } else if (slctDelka.value == 5) {
      lvlevo.innerHTML = "n. m.";
      lvpravo.innerHTML = "km";
    } else if (slctDelka.value == 6) {
      lvlevo.innerHTML = "ly";
      lvpravo.innerHTML = "km";
    } else if (slctDelka.value == 7) {
      lvlevo.innerHTML = "AU";
      lvpravo.innerHTML = "km";
    }
  };

  function vyberDelka() {
    upozorneni.innerHTML = "";
    if (slctDelka.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctDelka.value == 1) {
      inCm();
    } else if (slctDelka.value == 2) {
      ftM();
    } else if (slctDelka.value == 3) {
      ydM();
    } else if (slctDelka.value == 4) {
      miKm();
    } else if (slctDelka.value == 5) {
      nmKm();
    } else if (slctDelka.value == 6) {
      lyKm();
    } else if (slctDelka.value == 7) {
      auKm();
    }
  }

  function vyberHmotnost() {
    upozorneni.innerHTML = "";
    if (slctHmotnost.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctHmotnost.value == 1) {
      ozG();
    } else if (slctHmotnost.value == 2) {
      lbKg();
    }
  }

  function vyberObjem() {
    upozorneni.innerHTML = "";
    if (slctObjem.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctObjem.value == 1) {
      usaGalL();
    } else if (slctObjem.value == 2) {
      ukGalL();
    } else if (slctObjem.value == 3) {
      usaPtL();
    } else if (slctObjem.value == 4) {
      ukPtL();
    }
  }

  function vyberObsah() {
    upozorneni.innerHTML = "";
    if (slctObsah.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctObsah.value == 1) {
      acreHa();
    } else if (slctObsah.value == 2) {
      sqinSqcm();
    } else if (slctObsah.value == 3) {
      sqftSqdm();
    } else if (slctObsah.value == 4) {
      sqydSqm();
    } else if (slctObsah.value == 5) {
      sqmileSqkm();
    }
  }

  function vyberRychlost() {
    upozorneni.innerHTML = "";
    if (slctRychlost.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctRychlost.value == 1) {
      msKmh();
    } else if (slctRychlost.value == 2) {
      mphKmh();
    } else if (slctRychlost.value == 3) {
      knKmh();
    } else if (slctRychlost.value == 4) {
      maKmh();
    }
  }

  function vyberTeplota() {
    upozorneni.innerHTML = "";
    if (slctTeplota.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctTeplota.value == 1) {
      fC();
    } else if (slctTeplota.value == 2) {
      kC();
    }
  }

  function inCm() {
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
        vysledek = naparsovanoVlevo * 2.54;
        vpravo.value = vysledek;
      }
    } else if (naparsovanoVpravo !== null && naparsovanoVlevo === null) {
      if (isNaN(naparsovanoVpravo)) {
        upozorneni.innerHTML = "Nezadali jste číslo!";
      } else {
        vysledek = naparsovanoVpravo / 2.54;
        vlevo.value = vysledek;
      }
    } else if (naparsovanoVpravo == null && naparsovanoVlevo == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    }
    naparsovanoVlevo = null;
    naparovanoVpravo = null;
  }

  function ftM() {
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
        vysledek = naparsovanoVlevo * 0.3048;
        vpravo.value = vysledek;
      }
    } else if (naparsovanoVpravo !== null && naparsovanoVlevo === null) {
      if (isNaN(naparsovanoVpravo)) {
        upozorneni.innerHTML = "Nezadali jste číslo!";
      } else {
        vysledek = naparsovanoVpravo / 0.3048;
        vlevo.value = vysledek;
      }
    } else if (naparsovanoVpravo === null && naparsovanoVlevo === null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    }
    naparsovanoVlevo = null;
    naparovanoVpravo = null;
  }

  function ydM() {
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
        vysledek = naparsovanoVlevo * 0.9144;
        vpravo.value = vysledek;
      }
    } else if (naparsovanoVpravo !== null && naparsovanoVlevo === null) {
      if (isNaN(naparsovanoVpravo)) {
        upozorneni.innerHTML = "Nezadali jste číslo!";
      } else {
        vysledek = naparsovanoVpravo / 0.9144;
        vlevo.value = vysledek;
      }
    } else if (naparsovanoVpravo === null && naparsovanoVlevo === null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    }
    naparsovanoVlevo = null;
    naparovanoVpravo = null;
  }

  function miKm() {
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
        vysledek = naparsovanoVlevo * 1.609344;
        vpravo.value = vysledek;
      }
    } else if (naparsovanoVpravo !== null && naparsovanoVlevo === null) {
      if (isNaN(naparsovanoVpravo)) {
        upozorneni.innerHTML = "Nzadali jste číslo!";
      } else {
        vysledek = naparsovanoVpravo / 1.609344;
        vlevo.value = vysledek;
      }
    } else if (naparsovanoVpravo === null && naparsovanoVlevo === null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    }
    naparsovanoVlevo = null;
    naparsovanoVpravo = null;
  }

  function nmKm() {
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
        vysledek = naparsovanoVlevo * 1.852001;
        vpravo.value = vysledek;
      }
    } else if (naparsovanoVpravo !== null && naparsovanoVlevo === null) {
      if (isNaN(naparsovanoVpravo)) {
        upozorneni.innerHTML = "Nezadali jste číslo!";
      } else {
        vysledek = naparsovanoVpravo / 1.852001;
        vlevo.value = vysledek;
      }
    } else if (naparsovanoVpravo === null && naparsovanoVlevo === null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    }
    naparsovanoVlevo = null;
    naparsovanoVpravo = null;
  }

  function lyKm() {
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
        vysledek = naparsovanoVlevo * 9.46073e12;
        vpravo.value = vysledek;
      }
    } else if (naparsovanoVpravo !== null && naparsovanoVlevo === null) {
      if (isNaN(naparsovanoVpravo)) {
        upozorneni.innerHTML = "Nezadali jste číslo!";
      } else {
        vysledek = naparsovanoVpravo / 9.46073e12;
        vlevo.value = vysledek;
      }
    } else if (naparsovanoVpravo === null && naparsovanoVlevo === null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    }
  }

  function auKm() {
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
        vysledek = naparsovanoVlevo * 1.495979e8;
        vpravo.value = vysledek;
      }
    } else if (naparsovanoVpravo !== null && naparsovanoVlevo === null) {
      if (isNaN(naparsovanoVpravo)) {
        upozorneni.innerHTML = "Nezadali jste číslo!";
      } else {
        vysledek = naparsovanoVpravo / 1.495979e8;
        vlevo.value = vysledek;
      }
    } else if (naparsovanoVpravo === null && naparsovanoVlevo === null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    }
  }
};

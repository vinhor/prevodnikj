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
      upozorneni.innerHTML = "Nevybrali jste převod!";
    } else if (slctDelka.value == 1) {
      inNaCm();
    } else if (slct.value == 2) {
      ftNaCm();
    }
  }

  function inNaCm() {
    inpHodnota = inpHodnota.value.trim();
    naparsovano = parseFloat(inpHodnota);
    if (isNaN(naparsovano) || naparsovano == null) {
      upozorneni.innerHTML = "Nezadali jste číslo!";
    } else {
      vysledek = naparsovano * 2.54;
      upozorneni.innerHTML = naparsovano + " cm je " + vysledek + " in";
    }
    inpHodnota = document.getElementById("inpHodnota");
    naparsovano = null;
  }
};

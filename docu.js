window.onload = function () {
  const btnDelka = document.getElementById("btnDelka");
  const btnHmotnost = document.getElementById("btnHmotnost");
  const btnObjem = document.getElementById("btnObjem");
  const btnObsah = document.getElementById("btnObsah");
  const btnRychlost = document.getElementById("btnRychlost");
  const btnTeplota = document.getElementById("btnTeplota");
  const btnMena = document.getElementById("btnMena");
  const btnVykon = document.getElementById("btnVykon");
  const divt = document.getElementById("divt");
  const br = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  const br4 = document.createElement("br");
  const br5 = document.createElement("br");
  const br6 = document.createElement("br");
  const br7 = document.createElement("br");
  const ulDelka = document.getElementById("ulDelka");
  const ulHmotnost = document.getElementById("ulHmotnost");
  const ulObjem = document.getElementById("ulObjem");
  const ulObsah = document.getElementById("ulObsah");
  const ulRychlost = document.getElementById("ulRychlost");
  const ulTeplota = document.getElementById("ulTeplota");
  const ulMena = document.getElementById("ulMena");
  const ulVykon = document.getElementById("ulVykon");

  if (window.innerWidth < 475) {
    divt.className = "malatlacitka";
    divt.insertBefore(br, btnTeplota);
    divt.insertBefore(br2, btnHmotnost);
    divt.insertBefore(br3, btnObjem);
    divt.insertBefore(br4, btnObsah);
    divt.insertBefore(br5, btnRychlost);
    divt.insertBefore(br6, btnVykon);
    divt.insertBefore(br7, btnMena);
  } else {
    divt.className = "tlacitka";
  }

  btnDelka.onclick = function () {
    btnDelka.className = "one aktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    btnMena.className = "seven neaktivni";
    btnVykon.className = "eight neaktivni";
    ulDelka.style.display = "inline";
    ulHmotnost.style.display = "none";
    ulObjem.style.display = "none";
    ulObsah.style.display = "none";
    ulRychlost.style.display = "none";
    ulTeplota.style.display = "none";
    ulMena.style.display = "none";
    ulVykon.style.display = "none";
  };

  btnHmotnost.onclick = function () {
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two aktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    btnMena.className = "seven neaktivni";
    btnVykon.className = "eight neaktivni";
    ulDelka.style.display = "none";
    ulHmotnost.style.display = "inline";
    ulObjem.style.display = "none";
    ulObsah.style.display = "none";
    ulRychlost.style.display = "none";
    ulTeplota.style.display = "none";
    ulMena.style.display = "none";
    ulVykon.style.display = "none";
  };

  btnObjem.onclick = function () {
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three aktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    btnMena.className = "seven neaktivni";
    btnVykon.className = "eight neaktivni";
    ulDelka.style.display = "none";
    ulHmotnost.style.display = "none";
    ulObjem.style.display = "inline";
    ulObsah.style.display = "none";
    ulRychlost.style.display = "none";
    ulTeplota.style.display = "none";
    ulMena.style.display = "none";
    ulVykon.style.display = "none";
  };

  btnObsah.onclick = function () {
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four aktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    btnMena.className = "seven neaktivni";
    btnVykon.className = "eight neaktivni";
    ulDelka.style.display = "none";
    ulHmotnost.style.display = "none";
    ulObjem.style.display = "none";
    ulObsah.style.display = "inline";
    ulRychlost.style.display = "none";
    ulTeplota.style.display = "none";
    ulMena.style.display = "none";
    ulVykon.style.display = "none";
  };

  btnRychlost.onclick = function () {
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five aktivni";
    btnTeplota.className = "six neaktivni";
    btnMena.className = "seven neaktivni";
    btnVykon.className = "eight neaktivni";
    ulDelka.style.display = "none";
    ulHmotnost.style.display = "none";
    ulObjem.style.display = "none";
    ulObsah.style.display = "none";
    ulRychlost.style.display = "inline";
    ulTeplota.style.display = "none";
    ulMena.style.display = "none";
    ulVykon.style.display = "none";
  };

  btnTeplota.onclick = function () {
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six aktivni";
    btnMena.className = "seven neaktivni";
    btnVykon.className = "eight neaktivni";
    ulDelka.style.display = "none";
    ulHmotnost.style.display = "none";
    ulObjem.style.display = "none";
    ulObsah.style.display = "none";
    ulRychlost.style.display = "none";
    ulTeplota.style.display = "inline";
    ulMena.style.display = "none";
    ulVykon.style.display = "none";
  };

  btnMena.onclick = function () {
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    btnMena.className = "seven aktivni";
    btnVykon.className = "eight neaktivni";
    ulDelka.style.display = "none";
    ulHmotnost.style.display = "none";
    ulObjem.style.display = "none";
    ulObsah.style.display = "none";
    ulRychlost.style.display = "none";
    ulTeplota.style.display = "none";
    ulMena.style.display = "inline";
    ulVykon.style.display = "none";
  };

  btnVykon.onclick = function () {
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    btnMena.className = "seven neaktivni";
    btnVykon.className = "eight aktivni";
    ulDelka.style.display = "none";
    ulHmotnost.style.display = "none";
    ulObjem.style.display = "none";
    ulObsah.style.display = "none";
    ulRychlost.style.display = "none";
    ulTeplota.style.display = "none";
    ulMena.style.display = "none";
    ulVykon.style.display = "inline";
  };
};

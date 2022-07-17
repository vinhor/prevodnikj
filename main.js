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
  let btnVykon = document.getElementById("btnVykon");
  upozorneni = document.getElementById("upozorneni");
  let btnPrevod = document.getElementById("btnPrevod");
  let divt = document.getElementById("divt");
  let br = document.createElement("br");
  let br2 = document.createElement("br");
  let br3 = document.createElement("br");
  let br4 = document.createElement("br");
  let br5 = document.createElement("br");
  let br6 = document.createElement("br");
  let lvlevo = document.getElementById("lvlevo");
  let lvpravo = document.getElementById("lvpravo");
  let pInput = document.getElementById("pInput");

  const incm = new Prevod(2.54);
  const ftm = new Prevod(0.3048);
  const ydm = new Prevod(0.9144);
  const mikm = new Prevod(1.609344);
  const nmkm = new Prevod(1.852001);
  const lykm = new Prevod(9.46073e12);
  const aukm = new Prevod(1.495979e8);
  const ozg = new Prevod(28.34952);
  const lbkg = new Prevod(0.4535924);
  const usagall = new Prevod(3.7854);
  const ukgall = new Prevod(4.54609);
  const usaptl = new Prevod(0.4731765);
  const ukptl = new Prevod(0.5682612);
  const acreha = new Prevod(0.404686);
  const sqinsqcm = new Prevod(6.4516);
  const sqftsqdm = new Prevod(9.290304);
  const sqydsqm = new Prevod(0.8361274);
  const sqmilesqkm = new Prevod(2.589988);
  const mskmh = new Prevod(3.6);
  const mphkmh = new Prevod(1.609344);
  const knkmh = new Prevod(1.852001);
  const makmh = new Prevod(1225.044);
  const teplota = new Teplota();
  const kwhp = new Prevod(1.3596216173);

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

  vlevo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (btnDelka.className == "one aktivni") {
        vyberDelka();
      } else if (btnHmotnost.className == "two aktivni") {
        vyberHmotnost();
      } else if (btnObjem.className == "three aktivni") {
        vyberObjem();
      } else if (btnObsah.className == "four aktivni") {
        vyberObsah();
      } else if (btnRychlost.className == "five aktivni") {
        vyberRychlost();
      } else if (btnTeplota.className == "six aktivni") {
        vyberTeplota();
      } else if (btnVykon.className == "seven aktivni") {
        vyberVykon();
      }
    }
  });

  vpravo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (btnDelka.className == "one aktivni") {
        vyberDelka();
      } else if (btnHmotnost.className == "two aktivni") {
        vyberHmotnost();
      } else if (btnObjem.className == "three aktivni") {
        vyberObjem();
      } else if (btnObsah.className == "four aktivni") {
        vyberObsah();
      } else if (btnRychlost.className == "five aktivni") {
        vyberRychlost();
      } else if (btnTeplota.className == "six aktivni") {
        vyberTeplota();
      } else if (btnVykon.className == "seven aktivni") {
        vyberVykon();
      }
    }
  });

  if (window.innerWidth < 475) {
    divt.className = "malatlacitka";
    divt.insertBefore(br, btnTeplota);
    divt.insertBefore(br2, btnHmotnost);
    divt.insertBefore(br3, btnObjem);
    divt.insertBefore(br4, btnObsah);
    divt.insertBefore(br5, btnRychlost);
    divt.insertBefore(br6, btnVykon);
  } else {
    divt.className = "tlacitka";
  }

  btnDelka.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctDelka.value = 0;
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
    btnVykon.className = "seven neaktivni";
    pInput.style.display = "inline";
    btnPrevod.onclick = vyberDelka;
  };

  btnHmotnost.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctHmotnost.value = 0;
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
    btnVykon.className = "seven neaktivni";
    pInput.style.display = "inline";
    btnPrevod.onclick = vyberHmotnost;
  };

  btnObjem.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctObjem.value = 0;
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
    btnVykon.className = "seven neaktivni";
    pInput.style.display = "inline";
    btnPrevod.onclick = vyberObjem;
  };

  btnObsah.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctObsah.value = 0;
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
    btnVykon.className = "seven neaktivni";
    pInput.style.display = "inline";
    btnPrevod.onclick = vyberObsah;
  };

  btnRychlost.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctRychlost.value = 0;
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
    btnVykon.className = "seven neaktivni";
    pInput.style.display = "inline";
    btnPrevod.onclick = vyberRychlost;
  };

  btnTeplota.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctTeplota.value = 0;
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
    btnVykon.className = "seven neaktivni";
    pInput.style.display = "inline";
    btnPrevod.onclick = vyberTeplota;
  };

  btnVykon.onclick = function () {
    lvlevo.innerHTML = null;
    lvpravo.innerHTML = null;
    vlevo.value = null;
    vpravo.value = null;
    slctDelka.style.display = "none";
    slctHmotnost.style.display = "none";
    slctObjem.style.display = "none";
    slctObsah.style.display = "none";
    slctRychlost.style.display = "none";
    slctTeplota.style.display = "none";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
    btnObjem.className = "three neaktivni";
    btnObsah.className = "four neaktivni";
    btnRychlost.className = "five neaktivni";
    btnTeplota.className = "six neaktivni";
    btnVykon.className = "seven aktivni";
    pInput.style.display = "inline";
    lvlevo.innerHTML = "kW";
    lvpravo.innerHTML = "HP";
    btnPrevod.onclick = vyberVykon;
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

  slctHmotnost.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    if (slctHmotnost.value == 0) {
      lvlevo.innerHTML = "";
      lvpravo.innerHTML = "";
    } else if (slctHmotnost.value == 1) {
      lvlevo.innerHTML = "oz";
      lvpravo.innerHTML = "g";
    } else if (slctHmotnost.value == 2) {
      lvlevo.innerHTML = "lb";
      lvpravo.innerHTML = "kg";
    }
  };

  slctObjem.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    if (slctObjem.value == 0) {
      lvlevo.innerHTML = "";
      lvpravo.innerHTML = "";
    } else if (slctObjem.value == 1) {
      lvlevo.innerHTML = "USA gal";
      lvpravo.innerHTML = "l";
    } else if (slctObjem.value == 2) {
      lvlevo.innerHTML = "UK gal";
      lvpravo.innerHTML = "l";
    } else if (slctObjem.value == 3) {
      lvlevo.innerHTML = "USA pt";
      lvpravo.innerHTML = "l";
    } else if (slctObjem.value == 4) {
      lvlevo.innerHTML = "UK pt";
      lvpravo.innerHTML = "l";
    }
  };

  slctObsah.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    if (slctObsah.value == 0) {
      lvlevo.innerHTML = "";
      lvpravo.innerHTML = "";
    } else if (slctObsah.value == 1) {
      lvlevo.innerHTML = "acre";
      lvpravo.innerHTML = "ha";
    } else if (slctObsah.value == 2) {
      lvlevo.innerHTML = "sq. in";
      lvpravo.innerHTML = "cm²";
    } else if (slctObsah.value == 3) {
      lvlevo.innerHTML = "sq. ft";
      lvpravo.innerHTML = "dm²";
    } else if (slctObsah.value == 4) {
      lvlevo.innerHTML = "sq. yd";
      lvpravo.innerHTML = "m²";
    } else if (slctObsah.value == 5) {
      lvlevo.innerHTML = "mile²";
      lvpravo.innerHTML = "km²";
    }
  };

  slctRychlost.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    if (slctRychlost.value == 0) {
      lvlevo.innerHTML = "";
      lvpravo.innerHTML = "";
    } else if (slctRychlost.value == 1) {
      lvlevo.innerHTML = "m/s";
      lvpravo.innerHTML = "km/h";
    } else if (slctRychlost.value == 2) {
      lvlevo.innerHTML = "MPH";
      lvpravo.innerHTML = "km/h";
    } else if (slctRychlost.value == 3) {
      lvlevo.innerHTML = "kn";
      lvpravo.innerHTML = "km/h";
    } else if (slctRychlost.value == 4) {
      lvlevo.innerHTML = "Ma";
      lvpravo.innerHTML = "km/h";
    }
  };

  slctTeplota.onchange = function () {
    vlevo.value = null;
    vpravo.value = null;
    if (slctTeplota.value == 0) {
      lvlevo.innerHTML = "";
      lvpravo.innerHTML = "";
    } else if (slctTeplota.value == 1) {
      lvlevo.innerHTML = "°F";
      lvpravo.innerHTML = "°C";
    } else if (slctTeplota.value == 2) {
      lvlevo.innerHTML = "K";
      lvpravo.innerHTML = "°C";
    }
  };

  function vyberDelka() {
    upozorneni.innerHTML = "";
    if (slctDelka.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctDelka.value == 1) {
      incm.prevod();
    } else if (slctDelka.value == 2) {
      ftm.prevod();
    } else if (slctDelka.value == 3) {
      ydm.prevod();
    } else if (slctDelka.value == 4) {
      mikm.prevod();
    } else if (slctDelka.value == 5) {
      nmkm.prevod();
    } else if (slctDelka.value == 6) {
      lykm.prevod();
    } else if (slctDelka.value == 7) {
      aukm.prevod();
    }
  }

  function vyberHmotnost() {
    upozorneni.innerHTML = "";
    if (slctHmotnost.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctHmotnost.value == 1) {
      ozg.prevod();
    } else if (slctHmotnost.value == 2) {
      lbkg.prevod();
    }
  }

  function vyberObjem() {
    upozorneni.innerHTML = "";
    if (slctObjem.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctObjem.value == 1) {
      usagall.prevod();
    } else if (slctObjem.value == 2) {
      ukgall.prevod();
    } else if (slctObjem.value == 3) {
      usaptl.prevod();
    } else if (slctObjem.value == 4) {
      ukptl.prevod();
    }
  }

  function vyberObsah() {
    upozorneni.innerHTML = "";
    if (slctObsah.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctObsah.value == 1) {
      acreha.prevod();
    } else if (slctObsah.value == 2) {
      sqinsqcm.prevod();
    } else if (slctObsah.value == 3) {
      sqftsqdm.prevod();
    } else if (slctObsah.value == 4) {
      sqydsqm.prevod();
    } else if (slctObsah.value == 5) {
      sqmilesqkm.prevod();
    }
  }

  function vyberRychlost() {
    upozorneni.innerHTML = "";
    if (slctRychlost.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctRychlost.value == 1) {
      mskmh.prevod();
    } else if (slctRychlost.value == 2) {
      mphkmh.prevod();
    } else if (slctRychlost.value == 3) {
      knkmh.prevod();
    } else if (slctRychlost.value == 4) {
      makmh.prevod();
    }
  }

  function vyberTeplota() {
    upozorneni.innerHTML = "";
    if (slctTeplota.value == 0) {
      upozorneni.innerHTML = "Nevybrali jste si převod!";
    } else if (slctTeplota.value == 1) {
      teplota.f();
    } else if (slctTeplota.value == 2) {
      teplota.k();
    }
  }

  function vyberVykon() {
    upozorneni.innerHTML = "";
    kwhp.prevod();
  }
};

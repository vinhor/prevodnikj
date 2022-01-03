window.onload = function () {
  let slctDelka = document.getElementById("slctDelka");
  let slctHmotnost = document.getElementById("slctHmotnost");
  let slctObjem = document.getElementById("slctObjem");
  let btnDelka = document.getElementById("btnDelka");
  let btnHmotnost = document.getElementById("btnHmotnost");
  let btnObjem = document.getElementById("btnObjem");

  btnDelka.onclick = function () {
    slctDelka.style.display = "inline";
    btnDelka.className = "one aktivni";
    btnHmotnost.className = "two neaktivni";
    slctHmotnost.style.display = "none";
    slctObjem.style.display = "none";
    btnObjem.className = "three neaktivni";
  };

  btnHmotnost.onclick = function () {
    slctDelka.style.display = "none";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two aktivni";
    slctHmotnost.style.display = "inline";
    slctObjem.style.display = "none";
    btnObjem.className = "three neaktivni";
  };

  btnObjem.onclick = function () {
    slctObjem.style.display = " inline";
    slctDelka.style.display = "none";
    slctHmotnost.style.display = "none";
    btnObjem.className = "three aktivni";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two neaktivni";
  };
};

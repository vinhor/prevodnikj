window.onload = function () {
  let slctDelka = document.getElementById("slctDelka");
  let slctHmotnost = document.getElementById("slctHmotnost");
  let btnDelka = document.getElementById("btnDelka");
  let btnHmotnost = document.getElementById("btnHmotnost");
  slctDelka.style.display = "none";
  slctHmotnost.style.display = "none";

  btnDelka.onclick = function () {
    slctDelka.style.display = "inline";
    btnDelka.className = "one aktivni";
    btnHmotnost.className = "two neaktivni";
    slctHmotnost.style.display = "none";
  };

  btnHmotnost.onclick = function () {
    slctDelka.style.display = "none";
    btnDelka.className = "one neaktivni";
    btnHmotnost.className = "two aktivni";
    slctHmotnost.style.display = "inline";
  };
};

window.onload = function () {
    let inputly = document.getElementById("ly")
    let bly = document.getElementById("bly")
    let inputkm = document.getElementById("km")
    let bkm = document.getElementById("bkm")
    let naparsovano;
    let vysledek
    let svetelnyRok = 9.46073e+12;

    function lyToKm() {
        inputly = inputly.value.trim();
        naparsovano = parseFloat(inputly);
        if (isNaN(naparsovano) || naparsovano == null) {
            alert("Nezadali jste číslo!");
        } else {
            vysledek = naparsovano * svetelnyRok;
            alert(naparsovano + " ly je " + vysledek + " km")
        }
        inputly = document.getElementById("ly")
        naparsovano = null;
    }
    function kmToLy() {
        inputkm = inputkm.value.trim();
        naparsovano = parseFloat(inputkm);
        if (isNaN(naparsovano) || naparsovano == null) {
            alert("Nezadali jste číslo!");
        }
        else {
            vysledek = naparsovano / svetelnyRok;
            alert(naparsovano + " km je " + vysledek + " ly")
        }
        inputkm = document.getElementById("km")
        naparsovano = null;
    }
    bly.onclick = lyToKm;
    bkm.onclick = kmToLy;
}
window.onload = function () {
    let inputlb = document.getElementById("lb")
    let blb = document.getElementById("blb")
    let inputg = document.getElementById("g")
    let bg = document.getElementById("bg")
    let naparsovano;
    let vysledek;

    function lbToG() {
        inputlb = inputlb.value.trim();
        naparsovano = parseFloat(inputlb);
        if (isNaN(naparsovano) || naparsovano == null) {
            alert("Nezadali jste číslo!");
        } else {
            vysledek = naparsovano * 453.59;
            alert(naparsovano + " lb je je " + vysledek + " g")
        }
        inputlb = document.getElementById("lb")
        naparsovano = null;
    }
    function gToLb() {
        inputg = inputg.value.trim();
        naparsovano = parseFloat(inputg);
        if (isNaN(naparsovano) || naparsovano == null) {
            alert("Nezadali jste číslo!");
        } else {
            vysledek = naparsovano / 453.59;
            alert(naparsovano + " g je " + vysledek + " lb");
        }
        inputg = document.getElementById("g")
        naparsovano = null;
    }
    blb.onclick = lbToG;
    bg.onclick = gToLb;
}
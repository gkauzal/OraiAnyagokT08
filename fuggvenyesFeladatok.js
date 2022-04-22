"use strict";
exports.__esModule = true;
function TeglalapKeruletTerulet(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    document.write("<br>A ".concat(a, ",").concat(b, " oldal\u00FA t\u00E9glalap ker\u00FClete: ").concat(kerulet));
    document.write("<br>A ".concat(a, ",").concat(b, " oldal\u00FA t\u00E9glalap ter\u00FClete: ").concat(terulet));
}
function ParosE(vizsgalandoSzam) {
    if (vizsgalandoSzam % 2 == 0) {
        return true;
    }
    return false;
}
function PrimGenerator(hatarEgy, hatarKetto) {
    var also;
    var felso;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }
    var probalkozasokSzama = 0;
    var sikeresGeneralas = false;
    var generaltSzam;
    do {
        generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        var oszto = 0;
        for (var i = 1; i <= generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            sikeresGeneralas = true;
        }
    } while (sikeresGeneralas == false && probalkozasokSzama < 100);
    return generaltSzam;
}

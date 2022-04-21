function IloveTypeScript() {
    document.write("Szeretem a TypeScriptet")
}

function NegyzetKeruletTeruletEljaras(a: number): void {
    let kerulet: number = 4 * a;
    let terulet: number = a * a
    document.write('<br>A(z) ${a} oldalú négyzet kerülete: ${kerület}');
    document.write('<br>A(z) ${a} oldalú négyzet területe: ${terület}');
}

function RandomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100)
}

function NegyzetKeruletFuggveny(a: number): number {
    return 4 * a;
}
//Código cuadrado


function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

//Código Triángulo
function perimetroTriangulo (lado1, lado2, base) {
    return lado1+ lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base*altura)/2;
}
//código Circunferencia
const pi = Math.PI.toFixed(2);
function diametroCirculo (radio) {
    return radio*2;
}
function perimetroCirculo (radio) {
        const diametro = diametroCirculo (radio);
        return diametro * pi;
}
function areaCirculo (radio) {
    return (radio * radio) * pi;
}
//aquí interactuamos con el HTML

// CUADRADO

function calcularPerimetrocuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro =perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreacuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// TRIANGULO

function calcularPerimetrotriangulo () {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("inputb");
    const value3 = Number(base.value);
    const perimetroT = perimetroTriangulo (value1, value2, value3);
    alert("el perimetro del triangulo es: " + perimetroT);
}

function calcularAreatriangulo () {
    const base = document.getElementById("inputb");
    const value3 = Number(base.value);
    const altura = document.getElementById("inputh");
    const value4 = Number(altura.value);
    const areaT = areaTriangulo (value3, value4);
    alert("el area del triangulo es: " + areaT);
}

//circulo


function calcularPerimetrocirculo () {
    const radio = document.getElementById("inputCirculo");
    const radio1 = Number(radio.value);
    const perimC = perimetroCirculo (radio1);
    alert("EL perimetro del Circulo es: " + perimC);

}

function calcularAreacirculo () {
    const radio = document.getElementById("inputCirculo");
    const radio1 = Number(radio.value);
    const areaC = areaCirculo (radio1);
    alert("EL Área del Circulo es: " + areaC);

}

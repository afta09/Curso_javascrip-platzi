//Código cuadrado
console.group("cuadrados");

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}
// console.log("el perímetro del cuadrado es:" + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}

// console.log("el área del cuadrado es:" + perimetroCuadrado + "cm^2");
console.groupEnd();

//Código Triángulo
console.group("triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("los lados del Triangulo miden: " 
// + ladoTriangulo1 
// + " cm "  
// + ladoTriangulo2  
// + " cm " 
// + baseTriangulo  
// + " cm "
// );

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log( "el perímetro del triángulo es: " + perimetroTriangulo + "cm");

// console.log( "la altura de mi triangulo es: " + alturaTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log( "el área del triangulo es: " + areaTriangulo + "cm ^2");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1+ lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base*altura)/2;
}

console.groupEnd();

//código Circunferencia

console.group("circunferencias");
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
// const perimetroCirculo = diametroCirculo * pi;
// const areaCirculo = (radioCirculo*radioCirculo) * pi;

// console.log( "el radio del circulo es : " + radioCirculo + "cm");
// console.log( "el diámetro del circulo es: " + diametroCirculo + "cm");
// console.log(" el valor de PI es : " + pi);
// console.log( " el perímetro del circulo es :" + perimetroCirculo + "cm");
// console.log( " el área de nuestro circulo es : " + areaCirculo + "cm^2");

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
console.groupEnd();



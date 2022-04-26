// const precioOriginal = 120;
// const descuento = 18;

// const coupons = [
//     "Vale_por_15%"
//     "Vale_por_30%"
//     "Vale_por_25%"
// ]

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

function onclickButtonPriceCoupon() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue =inputCoupon.value;

    // let discount;

    // switch(cuponValue) {
    //     case coupons [0]: 
    //         descuento = 15; //"Vale_por_15%"
    //     break;
    //     case coupons[1]:
    //         descuento = 30; // "Vale_por_30%"
    //     break;
    //     case coupons[2]:
    //         descuento = 25; // "Vale_por_25%"
    //     break;
    // }

    const coupons = [
        {
            name: "Valepor15",
            discount: 15,
        },
        {
            name: "Valepor30",
            discount: 30,
        },
        {
            name: "Valepor25",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
   
    const userCoupon = coupons.find(isCouponValueValid);
   
    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
   }

    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
   
    // const precioConDescuento = calcularPrecioConDescuento(priceValue, cuponValue);

    // const resultP = document.getElementById("ResultP");

    // resultP.innerText = "el precio con descuentos es : $" + precioConDescuento;
}


// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

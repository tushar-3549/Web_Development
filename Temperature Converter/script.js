const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");

function CelToFar(){
    let result = (parseFloat(celcius.value)*9/5)+32;
    fahrenheit.value = parseFloat(result.toFixed(2));
}
function FarToCel(){
    let result = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celcius.value = parseFloat(result.toFixed(2));
}
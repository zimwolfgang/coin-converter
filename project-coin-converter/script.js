function ConverterDolar() {
    var elementValueDolar = document.getElementById("valueDolar");
    var valueDolar = elementValueDolar.value;
    var valueDolarFloat = parseFloat(valueDolar);
    var finalValueDolar = valueDolar * 5.09;
    var elementUpdatedValueDolar = document.getElementById("updatedValueDolar");
    var convertedValueDolar = "O resultado em real é R$ " + finalValueDolar;
    elementUpdatedValueDolar.innerHTML = convertedValueDolar;  
}
function ConverterEuro() {
    var elementValueEuro = document.getElementById("valueEuro");
    var valueEuro = elementValueEuro.value;
    var valueEuroFloat = parseFloat(valueEuro);
    var finalValueEuro = valueEuro * 5.54;
    var elementUpdatedValueEuro = document.getElementById("updatedValueEuro");
    var convertedValueEuro = "O resultado em real é R$ " + finalValueEuro;
    elementUpdatedValueEuro.innerHTML = convertedValueEuro;  
}
function sumar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = num1 + num2;

    document.getElementById("resultado").innerHTML = "La suma de los dos numeros es : " + resultado;
}

function restar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = num1 - num2;

    document.getElementById("resultado").innerHTML =  "El resultado de la resta es : " + resultado;

}

function dividir(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var resultado = num1 / num2;

    document.getElementById("resultado").innerHTML = "La Division entre los dos numeros es : " + resultado;

}

function multiplicar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = num1 * num2;

    document.getElementById("resultado").innerHTML = "La multiplicacion entre los dos numeros es : " + resultado;

}

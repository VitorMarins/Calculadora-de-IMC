function imc(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    if(peso != "" & altura != ""){
        IMC = peso / (altura * altura);
        if(IMC < 18.5){
            alert("Abaixo do peso");
        } else if (IMC > 18.5 & IMC <= 25) {
            alert("Peso Ideal");
        } else if (IMC > 25 & IMC <= 30) {
            alert("Acima do Peso");
        } else {
            alert("Obeso");
        }
    }
}
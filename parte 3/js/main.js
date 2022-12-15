const password = () =>{
    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;
    let number3 = document.querySelector("#number3").value;
    let resultado = document.querySelector("#resultado");
    
    if(number1 == 9 && number2 == 1 && number3 == 1){
        resultado.innerHTML = "password 1 correcto"
    }else if(number1 == 7 && number2 == 1 && number3 == 4){
        resultado.innerHTML = "password 2 correcto"
    }else{
        resultado.innerHTML = "password incorrecto"
    }
}
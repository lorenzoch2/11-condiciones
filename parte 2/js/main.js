const sticker = () =>{
    let sticker1 = document.querySelector("#input1").value;
    let sticker2 = document.querySelector("#input2").value;
    let sticker3 = document.querySelector("#input3").value;
    let total = document.querySelector("#resultado");
    let resultado = Number(sticker1) + Number(sticker2) + Number(sticker3);

    if(resultado <= 10 && resultado > 0){
        total.innerHTML = `Llevas ${resultado} stickers.`
    }else if(resultado > 10){
        total.innerHTML = `Llevas demasiados stickers.`
    }else{
        alert("No estás llevando ningún sticker. Recuerda que son máximo 10.")
    }
}
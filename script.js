let inserirNumero = (num) => {
    let numero = document.querySelector(".view").innerHTML
    document.querySelector(".view").innerHTML = numero + num
}

let limpar = () => {
    document.querySelector(".view").innerHTML = ""
}

let apagar = () => {
    let resultado = document.querySelector(".view").innerHTML
    document.querySelector(".view").innerHTML = resultado.substring(0, resultado.length -1)
    
}

let operacao = () => {
    let resultado = document.querySelector(".view").innerHTML
    if(resultado) {
       let calculo = eval(resultado)
       let decimal = calculo.toFixed(2)
       document.querySelector(".view").innerHTML = decimal
    }
    else {
        alert("Você precisa inserir um valor a ser calculado")
    }
}
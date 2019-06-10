let tela = 0
/* 
Se (tela = 0) -> a calculadora foi iniciada
Se (tela = 1) -> está fazendo a conta
Se (tela = 2) -> resultado mostrado, tem que apagar a tela
*/

function digitarNum(valor) {
    let b = document.querySelector('p.texto-conta')
    if(tela === 1){
        b.innerText += valor
    }else{
        b.innerText = valor
        tela = 1
    }
}

function digitarOp(valor) {
    let b = document.querySelector('p.texto-conta')
    if(b.innerText[0] != null){
        if(b.innerText.endsWith("*") || b.innerText.endsWith("/") || b.innerText.endsWith("+") || b.innerText.endsWith("-")){
            b.innerText = b.innerText.substring(0,(b.innerText.length - 1))
            b.innerText += valor
            tela = 1
        }else{
            b.innerText += valor
            tela = 1
        }
    }
}

function mostraResultado(){
    let b = document.querySelector('p.texto-conta')
    b.innerText = eval(b.innerText)
    tela = 2
}

function delConta(){
    let b = document.querySelector('p.texto-conta')
    b.innerText = b.innerText.substring(0,(b.innerText.length - 1))
}
let tela
/* 
Se (tela = 0) -> está fazendo a conta
Se (tela = 1) -> resultado mostrado, tem que apagar a tela
*/

function preencherTela(valor) {
    let b = document.querySelector('p.texto-conta')
    if(tela === 1){
        b.innerText = valor
        tela = 0
    }else{
        b.innerText += valor
    }
}

function mostraResultado(){
    let b = document.querySelector('p.texto-conta')
    b.innerText = eval(b.innerText)
    tela = 1
}

function delConta(){
    let b = document.querySelector('p.texto-conta')
    b.innerText = b.innerText.substring(0,(b.innerText.length - 1))
}
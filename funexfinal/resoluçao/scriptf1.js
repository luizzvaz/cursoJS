let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let resultado = document.getElementById('res')
let valores = []


function isNumero(n) {
    if(Number(n) >= 0 && Number(n) <= 100 ) {
        return true
    } else{
        return false
    }

}

function inLista(n,l) {
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    } 
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'Valor ' + num.value + ' add'
        lista.appendChild(item)
        resultado.innerHTML=''

    } else {
        window.alert('ERRO, NUMERO INVALIDO OU JA ADD')
    }
    num.value =''
    num.focus()
}

function analise() {
    if(valores.length == 0){
        window.alert('ADD VALORES PARA PODER ANALISAR')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        resultado.innerHTML=""
        resultado.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados </p>`
        resultado.innerHTML += `<p> O maior valor é ${maior} e o menor é ${menor}</p>`
        resultado.innerHTML += `<p> A soma é ${soma}!`
        resultado.innerHTML += `<p> a media é ${media.toFixed(2)}`
    }
}

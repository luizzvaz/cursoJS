let a = []
function ax(n){
    return a.push(n)
}
function addnum(){
    let numtxt = document.getElementById("receber")
    let sele = document.getElementById('conjunto')
    var test = document.getElementById('testa')
    if(numtxt.length == 0){
        window.alert('Não digitou o número para ADD, por favor digite um valor entre 0 e 100!')
    }else{ 
        let num = Number(numtxt.value)
        if ( num < 0 || num > 100){
            window.alert('Não podemos add esse valor!')
        }else{
            if (a.indexOf(num) != -1){
                window.alert('Número ja ADD, por favor escolher outro valor.')
            }else{
                a.push(num)
                let item = document.createElement('option')
                item.text = `Valor ${num} add`
                sele.appendChild(item)
                numtxt.value=""
                numtxt.focus()
                test.innerHTML=''
        }
        
            }
            
    } 
}
function analise(){
        
    if(a.length == 0){
        window.alert('conjunto vazio impossivel de analisar!')
    } else{
        var test = document.getElementById('testa')
        let tot = a.length
        let maior = a[0]
        let menor = a[0]
        let soma = 0
        let media = a
        for(let pos in a){
            soma += a[pos]
            if(a[pos] > maior)
                maior = a[pos]
            if(a[pos] < menor)
                menor = a[pos]
        }
        media = soma/tot
        test.innerHTML =  `O total de números é : ${tot}`
        test.innerHTML +=`<br> a soma é : ${soma} </br>`
        test.innerHTML += `<br> o maior valor é :${maior}</br>`
        test.innerHTML += `<br> o menor valor é :${menor}</br>`
        test.innerHTML += `<br>a media é :${media.toFixed(2)} </br>`
    }
    

}
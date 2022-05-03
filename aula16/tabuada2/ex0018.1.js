function contando(){
    var numtxt = document.getElementById('numero').value
    var res = document.getElementById('resultado')
    var tab = document.getElementById('tabu')
    var limttxt = document.getElementById('limt').value
    if(numtxt.length == 0 || limttxt.length == 0){
        window.alert('ERROR: o número não foi digitado.')
        res.innerHTML = 'Impossivel de fazer a tabuada sem número!'
    }else{
        var num = Number(numtxt)
        var limte = Number(limttxt)
        if(limte <= 0){
            limte = 1
            window.alert('erro, vc digitou que queria ver 0 partes da tabuada, vamos considerar 1')
        }
        res.innerHTML = "A tabuada de " + num+" até "+limte+" é:"
        for(var c = 1;c <= limte;c++){
            res.innerHTML +=`<br>${num} x ${c} = ${num*c}<br/>`
     
        }
    }
    
}
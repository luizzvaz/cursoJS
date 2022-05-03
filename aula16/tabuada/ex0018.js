function contando(){
    var numtxt = document.getElementById('numero').value
    var res = document.getElementById('resultado')
    var sele = document.getElementById('tabu')
    if(numtxt.length == 0){
        window.alert('ERROR: o número não foi digitado.')
        res.innerHTML = 'Impossivel de fazer a tabuada sem número!'
    }else{
        var num = Number(numtxt)
        res.innerHTML = "A tabuada de " + num+" é :"
        sele.innerHTML =""
        for(var c = 1;c <= 10;c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `sele${c}`
            sele.appendChild(item)
            res.innerHTML +=`<br>${num} x ${c} = ${num*c}<br/>`
     
        }
    }
    
}
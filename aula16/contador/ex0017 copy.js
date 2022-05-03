function contando(){
    var initx = document.getElementById('inicio').value
    var fimtxt = document.getElementById('fim').value
    var pastxt = document.getElementById('passo').value
    var res = document.getElementById('resultado')
    var test = document.getElementById('teste')
    if(initx.length == 0 || fimtxt.length == 0 || pastxt.length == 0){
        window.alert('ERRO(algo não foi preenxido)')
        res.innerHTML = 'Imposivel de fazer.'
    }else{
        var ini = Number(initx)
        var fim = Number(fimtxt)
        var pas = Number(pastxt)
        if(pas == 0){
            pas = 1
            window.alert('Passo invalido, vamos considerar = 1')
        }
        res.innerHTML = `vai de ${ini}  até  ${fim} de  ${pas} em ${pas}`
        if(ini<fim){
            res.innerHTML += ':'
            for(let c=ini;c<=fim;c =c+pas){
                res.innerHTML += `${c} < \u{1F449}`
            }
        }else{
            res.innerHTML +=':'
            for(let c=ini;c>=fim;c=c-pas){
                res.innerHTML += `${c} > \u{1F449}`
            }
        }
        res.innerHTML += 'fim!\u{1F3C1}'
    }
    


}
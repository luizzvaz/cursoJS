 function contando(){
     var inicio = document.getElementById('inicio').value
     var fim = document.getElementById('fim').value
     var passo = document.getElementById('passo').value
     var res = document.getElementById('resultado')
     if( inicio.length == 0 || fim.length == 0|| passo.length==0){
         res.innerHTML = "impossivel contar!"
     }else{
         res.innerHTML = " contando: "
         var ini = Number(inicio.value)
         var f =Number(fim.value)
         var pas =Number(passo.value)
         if(p <= 0){
             window.alert('Passo invalido ! Considerando Passo = 1')
             pas = 1
         }
         if(ini<f){
             //contagem crescente
             for(var c=ini;c<=f;c= c+pas){
                 res.innerHTML += `${c} \u{1F449}`
             }
         }else{
             //contagem decrescente
             for(var c =ini;c>=f;c=c-pas){
                 res.innerHTML +=`${c} \u{1F449}`
             }
         }
         res.innerHTML += `\u{1F3C1}`
     }
 }
    
    


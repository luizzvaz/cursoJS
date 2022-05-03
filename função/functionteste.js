function parimp(n){ //função ; (parametro)
    if(n % 2 == 0){  //ação
        return 'par' //retorno
    }else{
        return 'impar' //retorno
    }
}

let res = parimp(10) //chamada
console.log(res)

function soma(n1=0, n2=1) {
    return n1 + n2
}
 console.log(soma(1,6))
 console.log(soma())
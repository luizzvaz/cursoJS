var idade = 70
console.log('vc tem '+ idade +' anos ! logo:')
if (idade < 16){
    console.log('não vota')
}else { 
    if(idade >= 16 && idade < 18 || idade > 60){
    console.log('voto opcional')
}else {
    console.log('voto é obtigatorio')
}
    
}
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatemente ${hora} horas`)
if (hora<12 && hora>4){
    console.log('esta de manhã, bom dia!')
}else if (hora >= 12 && hora < 18){
    console.log('esta de tarde, boa Tarde')
}else {
    console.log('esta de noite, Boa noite')
}
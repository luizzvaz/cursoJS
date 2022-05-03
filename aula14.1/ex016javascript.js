function analisar(){
    var res = window.document.getElementById('resultado')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    
    if (fano.value.length == 0||fano.value > ano){
        window.alert('VERIRFICAR OS DADO ! tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //kid
                img.setAttribute('src','https://site-para-loucos.webnode.com.br/_files/system_preview_detail_200000018-4dcaa4ec4a-public/BEBEU-LEITE-DA-VACA-LOUCA.jpg')
            } else if(idade < 21 ) {
                //jofem
                img.setAttribute('src','https://c.tenor.com/emffi-6Nfd0AAAAC/project-x-project.gif')
            } else if(idade < 50) {
                //adulti
                img.setAttribute('src','https://c.tenor.com/L8--Zw3a2DwAAAAd/benas-homem.gif')
            } else {
                //velho
                img.setAttribute('src','https://c.tenor.com/JaAlnkTZJR4AAAAd/old-man-kicking.gif')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <12) {
                //kid
                img.setAttribute('src','https://c.tenor.com/PaU7hO0bSMIAAAAC/crazy-insane.gif')
            } else if (idade < 21) {
                //jofem
                img.setAttribute('src','https://c.tenor.com/eCh6aycDSwIAAAAM/tik-tok-teens-tik-tok-dance.gif')
            } else if (idade < 50) {
                //adult
                img.setAttribute('src','https://c.tenor.com/gRGpCzvFnBMAAAAM/cooking-angry-cooking.gif')
            } else {
                //velho
                img.setAttribute('src','https://c.tenor.com/ZZhBuU2oOGAAAAAd/old-dancing.gif')
            }

        }

        res.innerHTML = `${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hr = data.getMinutes()
   
    
    if(hr < 10){
        hr = '0'+ hr
    }
    
    msg.innerHTML = `Agora são ${hora} : ${hr} horas.`
    if(hora>=0 && hora < 12){
        img.src ='manha.jpg'
        msg.innerHTML += 'Bom Dia'
        document.body.style.background = 'rgb(110, 236, 106)'


    }else if(hora >= 12 &&  hora < 18){
        img.src ='tarde.jpg'
        msg.innerHTML += ' Boa Tarde :D'
        document.body.style.background = 'rgb(224, 240, 87)'

    }else{
        img.src = 'noite.jpg'
        msg.innerHTML += ' Boa Noite'
        document.body.style.background = ''

    }
   
}
   
const card = document.querySelector('img');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});


    

        

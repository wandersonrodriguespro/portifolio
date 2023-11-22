function carregar() {
    var msg = document.querySelector('.txtMsg')
    var img = document.querySelector('.imagem')
    var comp = document.querySelector('.comprimento')
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()

    var horaFormatada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;


    msg.innerHTML = `<p>Agora São ${horaFormatada} Horas</p>`

    if (hora >= 0 && hora < 12) {
         //Bom dia!
         img.src = 'img/img-manha.jpg'
         comp.innerHTML = 'Bom Dia!'
         document.body.style.backgroundColor = '#FCD288'
    }else if(hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'img/img-tarde.jpg'
        comp.innerHTML = 'Boa Tarde!'
        document.body.style.backgroundColor = '#569EEA'
    }else {
        //Boa Noite!
        img.src = 'img/img-noite.jpg'
        comp.innerHTML = 'Boa Noite!'
        document.body.style.backgroundColor = '#67496B'
    }
}
setInterval(carregar, 1000);
 
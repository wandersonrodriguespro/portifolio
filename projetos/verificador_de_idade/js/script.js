function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('.txtAno')
    var res = document.querySelector('.res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fSex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('class', 'foto')
        if(fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //menino
                img.setAttribute('src','img/menino.png')
            } else if (idade < 25){
                //jovem
                img.setAttribute('src', 'img/h-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/h-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso.png')
            }

            res.innerHTML = `<p>Você é um ${genero} com ${idade} Anos de Idade</p>`
        }else if(fSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //menina
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 25){
                //mulher jovem
               img.setAttribute('src', 'img/m-jovem.png')
            } else if (idade < 50) {
                //mulher adulta
                img.setAttribute('src', 'img/m-adulta.png')
            } else {
                //Idosa
               img.setAttribute('src', 'img/idosa.png')
            }
            res.innerHTML = `<p>Você é uma ${genero} com ${idade} Anos de Idade</p>`
        }

       
        res.appendChild(img)
    }
}
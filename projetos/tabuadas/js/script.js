function gerar() {
    var mult = document.getElementById('multiplicador')
    var gerar = document.getElementById('gerar')
    var reset = document.getElementById('reset')
    var res = document.querySelector('.res')
    

    if (mult.value.length == 0){
       res.innerHTML = `<p class='erro-res'>[ERRO...]<br><br>Multiplicador Não Encontrado - Insira Um Multiplicador Válido!</p>`
    }else{
        var c = Number(1)
        var m = document.getElementById('multiplicador').value
        res.innerHTML = `<p>Tabuada com Multiplicador "${m}"</p>`
        
        do{
            res.innerHTML += `<p>${m} x ${c} = ${m*c}</p>`
            c++
        }while (c <= 10)
    }

}

function reset(){
    document.getElementById('multiplicador').value = ''
    document.querySelector('.res').innerHTML = '<p>AGUARDANDO CALCULO....</p>'
}
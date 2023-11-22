function contar(){
var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var pas = document.getElementById('pas')
var res = document.querySelector('.res')

if (ini.value.length == 0){ //Validação Numero inical vazio 
   window.alert('Número de ínicio não detectado - Será considerado o Número " 0 "')
   ini.value = '0'
   ini.value.innerHTML('0')
}else if(fim.value.length == 0 || fim.value == 0){ //Validação Numero Fim vazio ou com valor 0
    window.alert('[Error] Inclua um número maior que " 0 " para Fim do Cálculo')
}else if (pas.value.length == 0 || pas.value == 0){ //Validação Numero Passo vazio ou com valor 0
    window.alert('[Error] Número de Passo inválido - Será considerado o valor " 1 " !')
    pas.value = '1'
    pas.value.innerHTML('1')
}else {
    res.innerHTML = '<p>Contando ...</p>'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    if(i < f){
        //Contagem crescente
        for(var c = i; c <= f; c+= p){
            res.innerHTML += `<span>${c} \u{1f449}</span>`
        }
    }else{
        //Contagem decrescente
        for(var c = i; c >= f; c-= p){
            res.innerHTML += `<span>${c} \u{1f449}</span>`
        }
    }
    
    res.innerHTML += `<span style="color: red;">Fim \u{1F3C1}</span>`
}
}

function reset(){ //reset de campos
    var res = document.querySelector('.res')

    document.getElementById('ini').value = ''
    document.getElementById('fim').value = ''
    document.getElementById('pas').value = ''

    res.innerHTML = '<p>Preparando a contagem...</p>'
}
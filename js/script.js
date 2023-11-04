function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');

    elemento.innerHTML = '';

    let i = 0;

    function addLetter() {
        if (i < textoArray.length) {
            elemento.innerHTML += textoArray[i];
            i++;
            setTimeout(addLetter, 60);
        } else {
            // Todo o texto foi escrito, você pode reiniciar a animação aqui
            setTimeout(() => {
                elemento.innerHTML = '';
                i = 0;
                addLetter(); // Inicie a animação novamente
            }, 1000); // Espere 1 segundo antes de reiniciar
        }
    }

    addLetter();

}

const titulo = document.querySelector('.sobre p');

typeWriter(titulo);
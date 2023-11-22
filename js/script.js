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

// scroll


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const scrollUpLink = document.querySelector('.scroll-up a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    scrollUpLink.addEventListener('click', smoothScrollToTop);

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    function smoothScrollToTop(e) {
        e.preventDefault();

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
});
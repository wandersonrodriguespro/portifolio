function typeWriter(elemento) {
    const textoArray = elemento.textContent.split('');
    
    elemento.innerHTML = '';

    let i = 0;

    function addLetter() {
        if (i < textoArray.length) {
            elemento.innerHTML += textoArray[i];
            i++;
            setTimeout(addLetter, 60);
        } else {
            
            setTimeout(() => {
                elemento.innerHTML = '';
                i = 0;
                addLetter(); 
            }, 1000); 
        }
    }

    addLetter();

}

const titulo = document.querySelector('.description-function');

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

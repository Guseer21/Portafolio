document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStylesheet = document.getElementById("theme-stylesheet");

    // Recuperar el tema actual almacenado en localStorage
    const savedTheme = localStorage.getItem("theme");

    // Establecer el tema al cargar la página
    if (savedTheme) {
        themeStylesheet.href = savedTheme;
    }

    themeToggle.addEventListener("click", function () {
        // Cambiar entre los estilos claro y oscuro
        if (themeStylesheet.href.includes("styles-light")) {
            themeStylesheet.href = "styles-dark.css";
        } else {
            themeStylesheet.href = "styles-light.css";
        }

        // Guardar el tema actual en localStorage
        localStorage.setItem("theme", themeStylesheet.href);
    });

    let menuVisible = false;

    function toggleMenu() {
        let nav = document.getElementById("nav");
        nav.classList.toggle("responsive", menuVisible);
        menuVisible = !menuVisible;
    }

    function hideMenu() {
        let nav = document.getElementById("nav");
        nav.classList.remove("responsive");
        menuVisible = false;
    }

    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const modalTitle = document.querySelector('.modal-title');
    const modalSummary = document.querySelector('.modal-summary');
    const modalImage = document.querySelector('.modal-image');
    const modalButton = document.querySelector('.modal-button');
    const closeBtn = document.querySelector('.close');
    const proyectos = document.querySelectorAll('.proyecto');

    function showModal(title, summary, imageSrc, link = '#') {
        modalTitle.textContent = title;
        modalSummary.textContent = summary;
        modalImage.src = imageSrc;
        modalButton.href = link;

        modal.style.display = 'block';

        setTimeout(function () {
            modalContent.classList.add('open');
        }, 10);
    }

    function hideModal() {
        modalContent.classList.remove('open');

        setTimeout(function () {
            modal.style.display = 'none';
        }, 300);
    }

    proyectos.forEach((proyecto) => {
        proyecto.addEventListener('click', function () {
            const title = proyecto.querySelector('h3').textContent;
            const summary = proyecto.querySelector('p').textContent;
            const imageSrc = proyecto.querySelector('img').getAttribute('src');
            const link = ''; // Agrega la URL deseada para el botón de enlace

            showModal(title, summary, imageSrc, link);
        });
    });

    closeBtn.addEventListener('click', hideModal);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            hideModal();
        }
    });

    function handleScroll() {
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300) {
            let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("photoshop");
            habilidades[3].classList.add("wordpress");
            habilidades[4].classList.add("drupal");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("trabajo");
            habilidades[7].classList.add("creatividad");
            habilidades[8].classList.add("dedicacion");
            habilidades[9].classList.add("proyect");
        }
    }

    window.addEventListener('scroll', handleScroll);
});
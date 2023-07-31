const elements = document.querySelectorAll(".hidden");

const myObserver = new IntersectionObserver( (event) => {
    event.forEach( element => {
        if (element.isIntersecting) {
            element.target.classList.add( "show" );
        } else {
            element.target.classList.remove( "show" );
        }
    })
})

elements.forEach( (element) => {
    myObserver.observe(element);
} )

// menu responsivo

const menu_responsivo = document.querySelector(".menu_respo");
const close_menu = document.querySelector("#close_menu");
const div_menu_responsivo = document.querySelector(".menu_responsivo")

menu_responsivo.addEventListener("click", () => {
    // div_menu_responsivo.classList.toggle( "menu_responsivo" );
    div_menu_responsivo.classList.toggle( "menu_ativo" );
})

close_menu.addEventListener("click", () => {
    // div_menu_responsivo.classList.toggle( "menu_responsivo" );
    div_menu_responsivo.classList.toggle( "menu_ativo" );
})
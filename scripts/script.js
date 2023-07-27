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
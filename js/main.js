/*=== Mostrar menú ===*/
const mostrarMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click',() =>{
            nav.classList.toggle('mostrar-menu')
        })
    }
}
mostrarMenu('nav-toggle','nav-menu')

/*=== Remover menú celular ===*/
const navLink = document.querySelectorAll('.nav__link')

function linkAccion(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAccion))

/*=== Scrollear secciones link activo ===*/
const secciones = document.querySelectorAll('seccion[id]')

function scrollActivo(){
    const scrollY = window.pageYOffset

    secciones.forEach(current =>{
        const alturaSeccion = current.offsetAltura
        const seccionTop = current.offsetTop - 50; 
        seccionId = current.getAttribute('id')

        if(scrollY > seccionTop && scrollY <= seccionTop + alturaSeccion){
            document.querySelector('.nav__menu a[href*=' + seccionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + seccionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActivo)

/*=== Mostrar scroll top ===*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('mostrar-scroll'); else scrollTop.classList.remove('mostrar-scroll')
}
window.addEventListener('scroll', scrollTop)

/*=== Tema claro/oscuro ===*/
const themeButton = document.getElementById('tema-boton')
const darkTheme = 'tema-oscuro'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
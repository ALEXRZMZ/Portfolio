"use strict"

;(()=>{
    // Constantes: elementos del menú

    const headerButton = document.querySelector(".Header-button")
    const headerNav = document.querySelector(".Header-nav")

    // Variables: estado del menú

    let isMenuOpen = false

    // Funciones: abre o cierra el menú

    const toggleMenuHandler = ()=>{
        isMenuOpen = !isMenuOpen
        headerButton.classList.toggle("is-open", isMenuOpen)
        headerNav.classList.toggle("is-open", isMenuOpen)
        headerButton.title= isMenuOpen ? "Cerrar menú" : "Abrir menú"
    }

    // Asignaciones: eventos

    headerButton.addEventListener("click", toggleMenuHandler)
})()
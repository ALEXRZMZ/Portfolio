"use strict"

    ; (() => {
        // Constantes: elementos del filtro
        const filterButtons = document.querySelectorAll(".Projects-btn")
        const projectsCards = document.querySelectorAll(".Projects-Card")
        const projectsGrid = document.querySelector(".Projects-grid")

        // Variables: filtro seleccionado
        let activeFilter = "todos"

        // Funciones: muestra solo las tarjetas del filtro elegido
        const filterProjectsHandler = (event) => {
            const clickedButton = event.currentTarget
            activeFilter = clickedButton.dataset.filter

            filterButtons.forEach((button) => {
                button.classList.toggle("is-active", button === clickedButton)
            })

            projectsCards.forEach((card) => {
                const isVisible = activeFilter === "todos" || card.dataset.category === activeFilter
                card.classList.toggle("is-hidden", !isVisible)
            })
            projectsGrid.classList.toggle("is-filtered", activeFilter !== "todos")
        }

        // Asignaciones: un evento por cada botón
        filterButtons.forEach((button) => {
            button.addEventListener("click", filterProjectsHandler)
        })
    })()
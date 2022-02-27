document.addEventListener("DOMContentLoaded", function(event) {
    
    const buttonso = document.querySelectorAll(".modal-activator-button")
    const buttonsc = document.querySelectorAll(".modal-disabling-button")

    buttonso.forEach (button => {
        button.addEventListener("click", function () {
            const modal = document.getElementById(this.getAttribute("data-target"))
            modal.classList.toggle("modal-hidden")
        })
    })

    buttonsc.forEach (button => {
        button.addEventListener("click", function () {
            const modal = document.getElementById(this.getAttribute("data-target"))
            modal.classList.add("modal-hidden")
        })
    })

});

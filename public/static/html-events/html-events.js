document.addEventListener('DOMContentLoaded', function () {
    
    const buttonmodetheme = document.querySelector(".dark-mode-activator")
    
    if (localStorage.getItem("mode-theme") == "dark") {
        document.body.classList.toggle("show-dark-mode")
    }

    buttonmodetheme.addEventListener("click", function () {
        switch (localStorage.getItem("mode-theme")) {
            case null:
                localStorage.setItem("mode-theme", "dark")
                document.body.classList.toggle("show-dark-mode")
                break;
            case "light":
                localStorage.setItem("mode-theme", "dark")
                document.body.classList.toggle("show-dark-mode")
                break;
            default:
                localStorage.setItem("mode-theme", "light")
                document.body.classList.toggle("show-dark-mode")
                break;
        }
    })

});
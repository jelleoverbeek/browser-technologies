// Section functions
const sections = {
    stylesheet: document.head.querySelector('link[href*="./assets/css/style.css"]'),
    // Return all the sections
    getSections: function() {
        return document.querySelectorAll("section")
    },
    // Hide all the sections
    hideSections: function () {
        const _this = this

        this.getSections().forEach(function(element) {

            // Check if stylesheet is loaded, if not add inline css instead of class
            if(!_this.stylesheet) {
                element.style.display = "none";
            } else {
                element.classList.add("hidden");
            }

        })
    },
    // Hide all sections and show current section again
    toggle: function (route) {
        this.hideSections()

        // Check if stylesheet is loaded, if not add inline css instead of class
        if(!this.stylesheet) {
            document.querySelector(route).style.display = "flex"
        } else {
            document.querySelector(route).classList.remove("hidden")
        }

    }
}

export default sections
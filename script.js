var accordions = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Sélectionnez tous les buttons
const buttons = document.querySelectorAll('.buttons button');

// Parcourez chaque bloc et ajoutez un gestionnaire d'événements de clic
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Ajoutez ou supprimez la classe 'open' à la flèche
        button.classList.toggle('open');
    });
});
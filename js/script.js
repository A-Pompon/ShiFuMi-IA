// On récupère tous les boutons dans une constante buttons
const buttons = document.querySelectorAll('button');

// On déclare la function playGame()
function playGame() {
    // On affect une boucle qui écoute le clic sur chaque bouton et qui initialise une fonction
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            // On affecte aux variables le contenu du bouton cliquer
            var player = buttons[i].innerHTML;
            var iaPlayer = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
            // On initialise le résulat vide, prêt à être utilisé
            let resultat = "";

            // On paramètre l'égalité
            if (player === iaPlayer) {
                resultat = "Egalité !";
            }
            // On paramètre la victoire
            else if (
                (player === "PIERRE " && iaPlayer === "CISEAUX") ||
                (player === "PAPIER " && iaPlayer === "PIERRE") ||
                (player === "CISEAUX " && iaPlayer === "PAPIER")
                ) {
                    resultat = "Gagné !";
                }
            // On paramètre la défaite
            else {
                resultat = "Perdu !"
            }
            // On paramètre l'affichage en fonction du résultat
            document.querySelector("#resultat").innerHTML = `
            Player : ${player} </br>
            IA : ${iaPlayer} </br>
            ${resultat}
            `
        });
    }
}

playGame();
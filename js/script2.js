// Initialisation des données

const pierreBtn = document.getElementById("pierre");
const papierBtn = document.getElementById("papier");
const ciseauxBtn = document.getElementById("ciseaux");
const resultat = document.getElementById("resultat");

var player = null;
var iaPlayer = null;
var result = null;

const iaChoice = ["Pierre", "Papier", "Ciseaux"];



// On crée la fonction définissant les conditions de victoire,
// de défaite et d'égalité
function playingCondition (p, ia) {
    if (p === "Pierre" && ia === "Ciseaux" ||
        p === "Papier" && ia === "Pierre" ||
        p === "Ciseaux" && ia === "Papier"
    ) {
        result = "Gagné !";
        resultat.innerHTML = `
            ${player} VS ${iaPlayer} : ${result}
        `;
    }
    else if (p === "Pierre" && ia === "Papier" ||
            p === "Papier" && ia === "Ciseaux" ||
            p === "Ciseaux" && ia === "Pierre"
    ) {
        result = "Perdu !";
        resultat.innerHTML = `
            ${player} VS ${iaPlayer} : ${result}
        `;
    } else {
        result = "Egalité !";
        resultat.innerHTML = `
            ${player} VS ${iaPlayer} : ${result}
        `;
    }
}

pierreBtn.addEventListener("click", stoneCase);
papierBtn.addEventListener("click", paperCase);
ciseauxBtn.addEventListener("click", scissorsCase);

// On crée les fonctions liées au clic sur pierre
function stoneCase() {
    player = "Pierre";
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
    iaPossibility = Math.floor(Math.random() * 3);
    iaPlayer = iaChoice[iaPossibility];
    playingCondition(player, iaPlayer);
    console.log('pierre');
}

// On crée les fonctions liées au clic sur papier
function paperCase() {
    player = "Papier";
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
    iaPossibility = Math.floor(Math.random() * 3);
    iaPlayer = iaChoice[iaPossibility];
    playingCondition(player, iaPlayer);
    console.log('papier');
}

// On crée les fonctions liées au clic sur ciseaux
function scissorsCase() {
    player = "Ciseaux";
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
    iaPossibility = Math.floor(Math.random() * 3);
    iaPlayer = iaChoice[iaPossibility];
    playingCondition(player, iaPlayer);
    console.log('ciseaux');
}

/*
// On crée un événement au moment du clic sur chaque bouton
pierreBtn.addEventListener("click", function() {
    player = "pierre";
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
    iaPossibility = Math.floor(Math.random() * 3);
    iaPlayer = iaChoice[iaPossibility];
    playingCondition(player, iaPlayer)
});

papierBtn.addEventListener("click", function() {
    player = "papier";
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
    iaPossibility = Math.floor(Math.random() * 3);
    iaPlayer = iaChoice[iaPossibility];
    playingCondition(player, iaPlayer)
});

ciseauxBtn.addEventListener("click", function() {
    player = "ciseaux";
    // On arrondie au chiffre inférieur le nombre renvoyé par random() grâce à floor()
    iaPossibility = Math.floor(Math.random() * 3);
    iaPlayer = iaChoice[iaPossibility];
    playingCondition(player, iaPlayer)
});
*/

// TO DO : RAJOUTER VARIABLE SCORE
// Boucles et créations d'objets

// Commencez par créer tous les fichiers nécessaires à votre travail (HTML, CSS, JS)

// De multiples images

// 1. Créez en JS un input de type `text` et un bouton.
// 2. Demandez à l'utilisateur.ice d'entrer un chiffre dans l'input (vous êtes libres de choisir la méthode). Lorsque l'utilisateur.ice clique sur le bouton, récupérez le chiffre entré pour créer autant de balises image (lien de l'image à utiliser: https://bowling-ball-shop.com/9305-large_default/900-global-volatility.jpg).

// La foire aux boutons

// Le but de l'exercice suivant est de comprendre le code qui vous présenté. Commencez par le tester!
// Vous pouvez vous aider de la documentation sur les couleurs RGB (https://www.w3schools.com/colors/) ainsi que de la docu sur Math.random() (https://www.w3schools.com/js/js_random.asp).

// 1. Commentez toutes les lignes suivantes en indiquant précisémment ce qu'elles font.

let input_number = document.createElement('input')
input_number.setAttribute('type', 'number')
document.body.appendChild(input_number)

let bouton = document.createElement('input')
bouton.setAttribute('type', 'button')
bouton.setAttribute('value', 'Cliquez!')
bouton.addEventListener('click', function() {
    for (let i = 0; i < input_number.value; i++) {
        let br = document.createElement('br')
        document.body.appendChild(br)
        let bouton = document.createElement('input')
        bouton.setAttribute('type', 'button')
        bouton.setAttribute('value', 'Cliquez!')
        bouton.addEventListener('click', randomColor)
        document.body.appendChild(bouton)
    }
})
document.body.appendChild(bouton)

function randomColor() {
    let valeurRGB_1 = Math.floor(Math.random()*256)
    let valeurRGB_2 = Math.floor(Math.random()*256)
    let valeurRGB_3 = Math.floor(Math.random()*256)

    let couleur = "rgb(" + valeurRGB_1 + "," + valeurRGB_2 + "," + valeurRGB_3 + ")"
    // ou bien let couleur = `rgb(${valeurRGB_1}, ${valeurRGB_2}, ${valeurRGB_3})`

    document.body.style.backgroundColor = couleur
    
}

// 2. Modifiez le texte indiqué sur les boutons

// 3. Modifier la fonction randomColor() pour qu'elle ne génère que des nuances de bleu

// 4. Utiliser l'attribut 'placeholder' de l'input de type 'number' pour indiquer à l'utilisateur.ice de rentrer un nombre.
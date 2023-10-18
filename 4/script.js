/*
INTRODUCTION

Dans cet exemple, le javascript a son propre fichier.js. Il est lié dans la page index.html via la balise <script>. L'attribut "src" de cette balise renseigne sur l'emplacement du script. Vous pouvez reproduire cette structure pour vos propres exercices. 

ELEMENTS THEORIQUES

Une fois que la page javascript est liée à la page HTML, nous pouvons recevoir des messages d'erreur via la console. Nous pouvons aussi "écrire" dans la console, en utilisant console.log et quelques variantes.

Ouvrez votre console et regardez comment les messages ci-dessous y apparaissent : */

console.log("Premier exemple");
console.log("Le nombre de la COVID : ", 19);
console.warn("Attention à la COVID !");
console.log("%cVoilà du texte géant vert", "color:green; font-family:monospace;font-size:22pt");

/*

ELEMENTS THEORIQUES


Pour ajouter des éléments à une page il y a toujours trois étapes : (i) créer un élément, (ii) le modifier (attributs, styles) et (iii) l'ajouter à la page */

// (i) créer un élément lien avec createElement("nomBalise")
let monLien = document.createElement("a");

// (ii) modifier cet élément...

// ... en ajoutant un attribut avec .setAttribute("nomAttribut","valeurAttribut")
monLien.setAttribute("href","https://unil.ch");
// ... en le remplissant avec .innerHTML("texte ou html")
monLien.innerHTML = "Cliquez ici";
// ... en ajoutant à l'élément la classe CSS "couleurRouge" avec classList.add('nomClasse')
monLien.classList.add('couleurRouge')

// (iii) ajouter cet élément à la page
document.body.appendChild(monLien);
// notez que dans ce cas, il s'agit de la variable monLien, et non d'une chaîne de caractère : il n'y a donc pas de guillemets

/* AMPLIFICATION DE VOS CONNAISSANCES

Cherchez, via Devdocs ou via le MDN

- comment fonctionne removeChild() ?
- quelle est la différence entre innerHTML, textContent et innerText ?
- à quoi sert classList.toggle() ?
- à quoi sert classList.contains() ?

*/

/* APPLICATION DE VOS CONNAISSANCES I

Ajoutez à la page index.html, grâce au Javascript

1. un lien html
2. une image de votre choix
3. un paragraphe contenant la phrase "je déteste la COVID"
4. un "br"
5. changez la couleur du fond de la page en rouge
 
6. ajoutez une classe ".enBleu" au fichier CSS
7. liez cette classe au paragraphe sur la COVID
8. ajoutez une liste d'éléments à la page (une balise "ul" contenant 2 balises "li" contenant du texte)

*/

// 1. LINK

let myLink = document.createElement("a");
myLink.setAttribute("href","https://ch.ch");
myLink.innerHTML="CLICK HERE FOR WWW.CH.CH";
myLink.classList.add('couleurRouge');
document.body.appendChild(myLink);

// 2. IMAGE

let myImage = document.createElement("img");
myImage.setAttribute("src","https://cdn.theatlantic.com/media/mt/science/assets_c/2012/05/lolcat-crocs-thumb-615x446-86738.jpg");
myImage.setAttribute("width","500");
myImage.setAttribute("height","400");
myImage.setAttribute("alt","lolcat");
document.body.appendChild(myImage);

// 3. PARAGRAPH CONTAINING PHRASE

let myParagraph = document.createElement("p");
myParagraph.innerHTML="I hate COVID.";
myParagraph.classList.add("inBlue");
document.body.appendChild(myParagraph);

// 4. <BR>

let myLinebreak = document.createElement("br");
document.body.appendChild(myLinebreak);

// 5. BACKGROUND COLOUR TO RED

document.body.style.backgroundColor = "lightGreen";

// CORRECTION!
// let body = document.querySelector("body");
// body.style.backgroundColor = "green";


// 6. ADD CLASS ".inBlue" to CSS FILE

/* .inBlue{
        color: blue;
} */

// 7. LINK .INBLUE to <P>

// myParagraph.classList.add("inBlue");

// 8. ADD LIST <UL> WITH 2x <LI> CONTAINING TEXT

let myList = document.createElement("ul");
let item1 = document.createElement("li");
let item2 = document.createElement("li");
item1.innerHTML="COFFEE";
item1.classList.add("inBlue");
item2.innerHTML="CREAM";
item2.classList.add("inBlue");
document.body.appendChild(myList);
myList.appendChild(item1);
myList.appendChild(item2);


/* APPLICATION DE VOS CONNAISSANCES II

Sur la page de l'UNIL, via la console, utilisez les connaissances acquises jusqu'à présent (et la méthode length, sur laquelle vous allez vous renseigner) pour :

9. compter le nombre de liens sur la page

document.querySelectorAll("a").length
120

10. compter le nombre d'images sur la page

document.querySelectorAll("img").length
18

Puis

11. ajoutez une image de votre choix (cf. ci-dessus) au bas de la page

document.querySelectorAll("img").length
18
That means an image added would be number 19


12. ajoutez un paragraphe de votre choix tout de suite après le div avec l'id "follow-hp" en vous servant de .querySelector() pour attraper le bon élément
13. lancez-vous un autre défi !

*/

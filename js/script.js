const btnPlus = document.querySelector(".js-plus");
const coltransport = document.querySelector(".conteneur-transport");


btnPlus.addEventListener("click", ouvreferme)

function ouvreferme() {

    coltransport.classList.toggle("invisible");

}
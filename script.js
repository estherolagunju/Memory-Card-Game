

const cards = document.querySelectorAll(".card");
let matchedParis = 0;
let cardOne, cardTwo;
let disableDeck = false;



function flipCard(){
    console.log('flipCard was executed');
}




function shuffleCards(){
    let matchedParis = 0;
let cardOne = cardTwo ="";
let disableDeck = false;

let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
arr.sort(() => Math.random() > 0.5 ? 1 : -1);

cards.forEach((card, i) => {
    card.classList.remove('flip');
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `images/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
});
}

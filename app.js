document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray = [

        {
            name: 'elephant',
            img: 'images/elephant.png'
        },
        {
            name: 'elephant',
            img: 'images/elephant.png'
        },
        {
            name: 'face',
            img: 'images/face.png'
        },
        {
            name: 'face',
            img: 'images/face.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'gate',
            img: 'images/gate.png'
        },
        {
            name: 'gate',
            img: 'images/gate.png'
        },
        {
            name: 'moon',
            img: 'images/moon.png'
        },
        {
            name: 'moon',
            img: 'images/moon.png'
        },
        {
            name: 'snow',
            img: 'images/snow.png'
        },
        {
            name: 'snow',
            img: 'images/snow.png'
        },


    ]
cardArray.sort(()=>0.5-Math.random())
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenID = []
    var cardsWon = []

function  createBoard(){
    for (let i = 0; i<cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}
   createBoard();
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenID[0]
        const optionTwoId = cardsChosenID[1]
        if (cardsChosen[0]===cardsChosen[1]){
            alert('It is a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        }else {
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            alert('one more time')
        }
        cardsChosen=[]
        cardsChosenID=[]
        resultDisplay.textContent= cardsWon.length
        if(cardsWon.length === cardArray.length/2){

            document.write("<h1>Winner</h1>");
        }
    }

    function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenID.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length===2){
            setTimeout(checkForMatch,500)
        }

    }
})
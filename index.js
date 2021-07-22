const textArea1 = document.getElementById('textArea1');
const textArea2= document.getElementById('textArea2');
const itemList =document.getElementById('itemList');


const btnHandler = () => {
  if (textArea1.value.length > 0) {
    showItemList(textArea1.value);
  }
 
};

const enterPress = (e) => {
  if (e.key === "Enter") {
  btnHandler();
  }
};


textArea1.addEventListener("keypress", enterPress);


var cardsList = [
    {
        question:"familie",
        answer:"familia"
    },
    {
        question:"flowers",
        answer:"flores"
    }

]

const card1 = cardsList[0].question[0];
const card2 = cardsList[0].answer[1]




const showItemList = (card) => {
 

  itemList.appendChild(createItem(card))
  textArea1.value = "";

  
}
const createItem = (card) => {
  
  const createCard = document.createElement('div');
  createCard.id = "item";
  createCard.innerHTML = card
  createCard.addEventListener("click", deleteItem);
  return createCard;

}
const deleteItem = (event) => {
  event.target.remove();
};



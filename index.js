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

const card1 = cardsList[0].question;
const card2 = cardsList[0].answer;




const showItemList = () => {
 
  itemList.appendChild(createItemQuestion(card1))
  textArea1.value = "";
  
}
const createItemQuestion = (card) => {
  
  const createCardQuestion = document.createElement('div');
  createCardQuestion.id = "item";
  createCardQuestion.innerHTML = card
  createCardQuestion.addEventListener("click", createItemAnswer);
  return createCardQuestion;

}
const createItemAnswer = (card) => {
  itemList.appendChild(createItemQuestion(card2))
 
};



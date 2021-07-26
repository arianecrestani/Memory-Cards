
const itemList =document.getElementById('itemList');
// usar na outra pagina esta lista 
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

const showItemList = () => {
  const randomIndex = Math.floor(Math.random() * cardsList.length)
  const card = cardsList[randomIndex]
 
  itemList.appendChild(createItemQuestion(card)) 
 
}
const createItemQuestion = (card) => {
  
  const createCardQuestion = document.createElement('div');
  createCardQuestion.id = "item";
  createCardQuestion.innerHTML = card.question;
  createCardQuestion.addEventListener("click", () => {
  createCardQuestion.innerHTML = card.answer;
  });
  
  return createCardQuestion;

}

showItemList();
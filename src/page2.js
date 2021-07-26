const inputArea = document.getElementById("textArea");
const itemList = document.getElementById("itemList");

let tempCard = { question: "", answer: "" };

var cardsList = [
  {
    question: "familie",
    answer: "familia",
  },
  {
    question: "flowers",
    answer: "flores",
  },
];

const showItemList = (card) => {
  itemList.appendChild(createItem(card))
};

const createItem = (card) => {
  const itemQuestion = document.createElement("div");
  itemQuestion.id = "item";
  itemQuestion.innerText = `question ${card.question} answer ${card.question}`;
  return itemQuestion;
};

const addCard = () => {
  // se o tempCard.question tiver vazio
  if (tempCard.question === "") {
    // adicionar o question no tempCard com o inputArea.value
    tempCard.question = inputArea.value;
  } else {
    // se nao

    // adiciona o answer
    tempCard.answer = inputArea.value;
    // adicionar o tempCard no cardsList

    cardsList.push(tempCard);
    // array,,,,,percorrer o cardsList e mostrar cada item na tela
    cardsList.forEach((element) => {
      showItemList(element);
    });
    // limpar os valores tempCard.question e tempCard.answer
    tempCard.question= "";
    tempCard.answer = "";
  }
    inputArea.value = "";
  // limpar o campo inputValue
};

const pressedEnterEvent = (e) => {
  if (e.key === "Enter") {
    addCard();
  }
};

inputArea.addEventListener("keypress", pressedEnterEvent);

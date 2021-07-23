
const inputArea = document.getElementById('textArea');
const btnHandler= document.getElementById('btnHandler');
const itemList =document.getElementById('itemList');


const btnClick = () => {
  if (inputArea.value.length > 0) {
    showItemList(inputArea.value);
  }
 
};

const enterPress = (e) => {
  if (e.key === "Enter") {
  btnHandler();
  }
};


inputArea.addEventListener("keypress", enterPress);
btnHandler.addEventListener("click", btnClick);

const showItemList = (card) => {
    itemList.appendChild(createInputQuestion(card));
    inputArea.value = "";
    
  };

const createInputQuestion = (card) => {
    const item = document.createElement("div");
    item.id = "addItem";
    item.innerHTML = card;
    return item;
  };
  const createInputAnswer = (card) => {
    itemList.appendChild(createInputQuestion(card2))
   
  };
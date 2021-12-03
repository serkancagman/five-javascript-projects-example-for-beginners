const form = document.getElementById("form");
const input = document.getElementById("input");
const doList = document.getElementById("do-lists");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addList();
  deleteList();
  okayList();
  input.value= ""
});

const addList = () => {
    
  const inputValue = input.value;
  const newList = document.createElement("div");
  const newSpan = document.createElement("span");
  doList.appendChild(newList);
  newList.innerText = inputValue;
  newList.className = "list-item";
  newList.appendChild(newSpan);
  newSpan.className = "close-button";
  newSpan.innerText = "X";

};

const okayList = () => {
  const listItems = document.querySelectorAll(".list-item");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function secList() {
      this.classList.add("list-ok");
    });
    
  }
};
okayList();

const deleteList = () => {
  const closeButton = document.querySelectorAll(".close-button");
  for (let x = 0; x < closeButton.length; x++) {
    closeButton[x].addEventListener("click", function () {
      const pElement = this.parentElement;
      pElement.remove();
    });
  }
};
deleteList();

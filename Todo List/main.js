const AddToDoButton = document.getElementById("addToDo");
const ToDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");
console.log(this);

const addButtonHandler = function (event) {
  console.log(this);
  console.log(event);
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  ToDoContainer.appendChild(paragraph);
  inputField.value = " ";

  paragraph.addEventListener("click", function () {
    console.log(paragraph.style)
    console.log(paragraph.style.textDecoration)
    if (paragraph.style.textDecoration === "line-through") {
      paragraph.style.textDecoration = "none";
    } else {
      paragraph.style.textDecoration = "line-through";
    }
  });

  paragraph.addEventListener("dblclick", function () {
    ToDoContainer.removeChild(paragraph);
  });
};

const inputKeyPressHandler = function (event) {
  if (event.keyCode === 13) {
    console.log(event);
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    ToDoContainer.appendChild(paragraph);
    inputField.value = " ";

    paragraph.addEventListener("click", function () {
      // paragraph.style.textDecoration = "line-through";

      if (paragraph.style.textDecoration === "line-through") {
        paragraph.style.textDecoration = "none";
      } else {
        paragraph.style.textDecoration = "line-through";
      }
    });

    paragraph.addEventListener("dblclick", function () {
      ToDoContainer.removeChild(paragraph);
    });
  }
};

AddToDoButton.addEventListener("click", addButtonHandler);
inputField.addEventListener("keyup", inputKeyPressHandler);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));

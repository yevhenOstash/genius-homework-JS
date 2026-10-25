// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const button = document.querySelector("#button-delete");
// const text = document.querySelector("#text");
// function deleteElement(){
//     text.classList.add("hidden");
// }
// button.addEventListener("click", deleteElement);

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const button = document.querySelector("#button-delete");
// function deleteElement(){
//     button.classList.add("hidden");
// }
// button.addEventListener("click", deleteElement);

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const tree = document.querySelector("#tree");
// tree.addEventListener("click", Tree);
// function Tree(event) {
//     if (event.target.classList.contains("tree") == false) {
//     return;
//   }
//   let parentOfList = event.target.closest("li");
//   let childrenContainer = parentOfList.querySelector("ul");
//   if (childrenContainer) {
//     childrenContainer.classList.toggle("hidden");
//   }
// };
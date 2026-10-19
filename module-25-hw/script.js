// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою  call apply bind

// let students = {
//   name: "name",
//   major: "Major",
//   averageScore: 34,
//   missedLessons: 4,
//   studentInfoAnnouncement: function (score, missedLessons) {
//     console.log(`Name : ${this.name}.`);
//     console.log(`Major : ${this.major}.`);
//     console.log(`Average score : ${score}.`);
//     console.log(`Missed lessons : ${missedLessons}.`);
//   },
// };
// const Max = {
//   name: "Max",
//   major: "Computer science",
//   averageScore: 78,
//   missedLessons: 3,
// };
// const Lera = {
//   name: "Lera",
//   major: "Engineer",
//   averageScore: 94,
//   missedLessons: 0,
// };
// const Misha = {
//   name: "Misha",
//   major: "Software developer",
//   averageScore: 43,
//   missedLessons: 16,
// };
// students.studentInfoAnnouncement.call(Max, 78, 3);
// students.studentInfoAnnouncement.apply(Lera, [94, 0]);
// students.studentInfoAnnouncement.bind(Misha, 43, 16)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const buttonHTML = document.querySelector(".html-button");
// buttonHTML.addEventListener("click", () =>
//   console.log(
//     "HTML (HyperText Markup Language — мова розмітки гіпертексту) — це стандартна мова розмітки, яка задає структуру та зміст кожної вебсторінки в Інтернеті",
//   ),
// );
// const buttonCSS = document.querySelector(".css-button");
// buttonCSS.addEventListener("click", () =>
//   console.log(
//     "CSS (Cascading Style Sheets або каскадні таблиці стилів) — це спеціальна мова стилю, яка використовується для опису зовнішнього вигляду та форматування веб-сторінок",
//   ),
// );

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30,  4,5
// 2) cherry  58,   1,3
// 3) orange 89. 3,4

// function PriceCounter(product, priceKg, amount) {
//   let summPrice = priceKg * amount;
//   return {
//     name: product,
//     price: Math.round(summPrice),
//   };
// }
// console.log(PriceCounter("banana", 30, 4.5)); //{name: 'banana', price: 135}
// console.log(PriceCounter("cherry", 58, 1.3)); //{name: 'cherry', price: 75}
// console.log(PriceCounter("orange", 89, 3.4)); //{name: 'orange', price: 303}

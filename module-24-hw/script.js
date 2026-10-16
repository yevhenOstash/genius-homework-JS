// ---1--
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
// var1
// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }
// var2
// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }

//--- 2--
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// const findSmaller = (a, b) => {
//   const c = Math.min(a, b);
//   return console.log(c);
// };
// findSmaller(100, 1001);

// ---3--
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   },
// );

// const yes = () => {
//   alert("Ви погодились.");
// };
// const no = () => {
//   alert("Ви скасували виконання.");
// };
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask("Ви згодні?", yes, no);

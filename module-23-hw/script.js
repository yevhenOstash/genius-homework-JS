//  -- 1 --
// У вас є масив об’єктів fruits, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// const fruitsNameArray = fruits.map((item) => item.name);
// console.log(fruitsNameArray);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i += 2) console.log(i);

//  -- 3 --
// Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   let x = Number(prompt("Enter a number > 100 : "));
//   if (x > 100 || x === null || !x) break;
// }

//  -- 5 --
// Вирахуйте середній вік

//1_ВАРІАНТ for
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// const ageArray = girls.map((item) => item.age);
// let avgAge = 0;
// let i = ageArray.length;
// while (i--) {
//   avgAge += ageArray[i];
// }
// console.log(avgAge / ageArray.length);

//2_ВАРІАНТ reduce
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// const Age = girls.reduce((sum, item) => sum + item.age, 0);
// console.log(Age / girls.length);

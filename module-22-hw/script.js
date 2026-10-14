//  Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let x;
// x = prompt(
//   "Enter any number, if it's bigger than 0, answer will be true, if this number is equal to zero, answer will be 0, in opposite way - false",
// );
// x = Number(x);
// if (x > 0) {
//   alert(true);
// } else if (x < 0) {
//   alert(false);
// } else {
//     alert("This is 0");
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let message;
// message = prompt("Enter the word :");
// message = message.toLowerCase();
// message === "test" ? alert(true) : alert(false);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let num;
// num = prompt("Enter a number :");
// num = Number(num);
// if (num > 10) console.log(num - 5);
// else if (num < 10) console.log(num + 5);
// else console.log("Your number is 10 or it's not a number");

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let x;
// x = prompt("Enter a number in range 1-12 : ");
// x = Number(x);
// switch (x) {
//   case 1:
//     alert("the 1 month of the year is January");
//     break;
//   case 2:
//     alert("the 2 month of the year is February");
//     break;
//   case 3:
//     alert("the 3 month of the year is March");
//     break;
//   case 4:
//     alert("the 4 month of the year is April");
//     break;
//   case 5:
//     alert("the 5 month of the year is May");
//     break;
//   case 6:
//     alert("the 6 month of the year is June");
//     break;
//   case 7:
//     alert("the 7 month of the year is July");
//     break;
//   case 8:
//     alert("the 8 month of the year is August");
//     break;
//   case 9:
//     alert("the 9 month of the year is September");
//     break;
//   case 10:
//     alert("the 10 month of the year is October");
//     break;
//   case 11:
//     alert("the 11 month of the year is November");
//     break;
//   case 12:
//     alert("the 12 month of the year is December");
//     break;
//   default:
//     alert("It's not a number or this number is not in the range 1 to 12");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let x;
// x = prompt("Enter a three-digit number ");
// x = Number(x);
// let sum = 0;
// sum = sum + (x % 10);
// x = Math.floor(x / 10);
// sum = sum + (x % 10);
// x = Math.floor(x / 10);
// sum = sum + x;
// alert(`Summary of the each digit in your number is : ${sum}`);

// const add = function () {
//   console.log(arguments);
// };

// add(1, 2, 3);
// [1, 2, 3, 4, 5];
// [1, 2, 3, 4, 5, 6, 7];

// const message = 'Proin sociis natoque et magnis parturient montes mus';
// console.log(message.length);
// const masive = message.split('');
// console.log(masive);
// console.log(typeof masive[5]);
// let total = 0;
// for (let symbol of masive) {
//   if (symbol === ' ') {
//     total += 0;
//   } else {
//     total += 1;
//   }
// }
// console.log(total);
// /*

// */

// const friends = ['Proi', 'socis', 'nat', 'et', 'magn', 'pent', 'mones'];
// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }
// console.table(friends);

// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   message.split(' ').length * pricePerWord;

// const message1 = 'Proi socis nat et magn pent mones';
// const message2 = 'Proi socis nat et magn pent mones';
// const message3 = 'Don orci lect aliqum est magi';
// const message4 = 'Don orci lect aliqum est magi';
// const price1 = 10;
// const price2 = 20;
// const price3 = 40;
// const price4 = 20;

// console.log(calculateEngravingPrice(message1, price1));
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// const getItemsString = function (array) {
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(array1));
// //
// const array1 = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const array2 = [5, 10, 15];
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(cards.indexOf(cardToUpdate), 1, 'Обновленная карточка-4');

// console.table(cards);

// const string = 'qWeRTzxCv';
// const motto = 'WeaReThecaMpiOns';

// const changeRegister = function (x) {
//   let invertedString = '';

//   for (const letter of x.split('')) {
//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
//   }
//   return console.log(invertedString);
// };

// changeRegister(motto);

// if (letter === letter.toLowerCase()) {
//   console.log('Эта буква в нижнем регистре!!! - ', letter);

//   invertedString += letter.toUpperCase();
// } else {
//   console.log('Эта буква в верхнет регистре!!! - ', letter);
//   invertedString += letter.toLowerCase();
// }
//
//
//
//
//
//
//

// let say = 'London is the capital of Great Britain';
// let string = 'We aRe The chaMpiOns';
// let upResult = '';
// const resultMassive = string.split(' ');
// console.log(resultMassive);

// for (let element of resultMassive) {
//   //   console.log(element);
//   let word = element.split('').join('');
//   console.log(word);

//   let resultWord = '';
//   upResult += resultWord;

//   for (let letter of word) {
//     // console.log(letter);
//     if (letter === letter.toLowerCase()) {
//       //   console.log('low - ', letter);
//       resultWord += letter.toUpperCase();
//     } else {
//       //   console.log('up - ', letter);
//       resultWord += letter.toLowerCase();
//     }
//   }
//   console.log(resultWord);
// }
// console.log(upResult);
//
//
//
//
//
//
//
//

// const noSpace = function (x) {
//   return x.split(' ').join('');
// };
// console.log(noSpace(string));

//
//
//
//
//
//
//
//
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string;
// string = friends.join(',');
// console.log(string);

//
//
//
//
//
//

// let string = '';

// for (let i = 0; i < friends.length; i += 1) {
//   let friend = friends[i] + ',';
//   console.log(friend);
//   string += friend;
// }
// console.log(string.length);
// string = string.slice(0, string.length - 1);
// console.log(string);
// console.log(string.length);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log('biggestNumber: ', biggestNumber);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message;
//
// можна так
// for (let login of logins) {
//   if (logins.includes(loginToFind)) {
//     console.log('luck');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }
//
// но лучше так
// let messageN = `Пользователь ${loginToFind} не найден.`;
// let messageY = `Пользователь ${loginToFind} найден.`;
// message = logins.includes(loginToFind) ? messageY : messageN;

// console.log(message);
//
//
//
//
//
//
//
//
//
//
//

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let evenTotal = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0) {
//     continue;
//   } else {
//     console.log(numbers[i]);
//     evenTotal += numbers[i];
//   }
// }
// console.log('Сумма = ', evenTotal);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const cart = [12, 45, 23, 56, 76, 8, 3];

// let total = 0;
// console.table(cart);
// // for (let i = 0; i < cart.length; i += 1) {
// //   console.log(cart[i]);
// //   total += cart[i];
// // }
// for (let value of cart) {
//   total += value;
// }

// console.log(total);

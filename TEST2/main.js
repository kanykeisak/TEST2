// Задание 1

// const extractNumbers = (str) => {
//     return str.match(/\d/g).map(Number);
// }
//
// console.log(extractNumbers("a1fg5hj6"));

// Задание 2

// function fibonacciWithDelay(a = 0, b = 1) {
//     if (a > 144) return;
//     console.log(a);
//     setTimeout(function() {
//         fibonacciWithDelay(b, a + b);
//     }, 1000);
// }
//
// fibonacciWithDelay();


// Задание 3

// async function fetchAndDisplayTitles() {
//     const apiUrl = 'https://fakestoreapi.com/products';
//
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//
//         data.forEach(product => {
//             console.log(product.title);
//         });
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//     }
// }
//
// fetchAndDisplayTitles();



// Задание 4

// function changeBackgroundColor(event) {
//     if (event.target.tagName === 'BUTTON') { // Проверяем, что нажата кнопка
//         document.body.style.backgroundColor = event.target.textContent; // Меняем цвет фона
//     }
// }
//
// // Добавляем обработчик события к контейнеру
// document.querySelector('#button-container').addEventListener('click', changeBackgroundColor);

// Задание 5

// document.querySelector('#toggle-button').addEventListener('click', function() {
//     const square = document.getElementById('square');
//     if (square.style.display === 'none') {
//         square.style.display = 'block';
//         this.textContent = 'Скрыть блок';
//     } else {
//         square.style.display = 'none';
//         this.textContent = 'Показать блок';
//     }
// });

// Задание 6

// let count = 0;
// const counterElement = document.querySelector('#counter');
//
// const intervalId = setInterval(() => {
//     count++;
//     counterElement.textContent = count;
//
//     if (count >= 100) {
//         clearInterval(intervalId);
//     }
// }, 1);

// Задание 7

// document.getElementById('fetch-button').addEventListener('click', async () => {
//     try {
//         const response = await fetch('products.json');
//         if (!response.ok) {
//             throw new Error(`Ошибка HTTP: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//     }
// });
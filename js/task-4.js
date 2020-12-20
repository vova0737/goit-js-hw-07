// Задание 4

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// --------------------------------------------------

const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);

const increment = function () {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decrement = function () {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

buttonDecrementRef.addEventListener('click', decrement);
buttonIncrementRef.addEventListener('click', increment);
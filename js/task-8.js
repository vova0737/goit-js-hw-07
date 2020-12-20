// Задание 8 - дополнительное, выполнять не обязательно

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего
// рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
//     Имеет случайный rgb цвет фона
//     Размеры самого первого div - 30px на 30px
//     Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.

// ---------------------------------------------------------

const inputRef = document.querySelector('input[type="number"]');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let quantity;
let boxSize = 30;

const countBoxesHandler = function (event) {
  quantity = event.target.value;
}

const createBoxesHandler = function () {
  for (let i = 0; i < quantity; i++) {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(
      Math.random() * 256,
    )} ${Math.floor(Math.random() * 256)})`;
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    boxesRef.append(newBox);
    boxSize += 10;
  }
}

const destroyBoxesHandler = function () {
  const boxes = document.querySelectorAll('#boxes div');
  boxes.forEach(box => box.remove());
  boxSize = 30;
}

inputRef.addEventListener('input', countBoxesHandler);
renderRef.addEventListener('click', createBoxesHandler);
destroyRef.addEventListener('click', destroyBoxesHandler);
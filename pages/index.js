import { initialList } from '../utils/list.js';
let list = initialList;

const form = document.querySelector('.to-do__form');
const container = document.querySelector('.to-do__list');
const template = document.querySelector('#item').content;

const counterAll = document.querySelector('.counter__counter-all');
const counterActive = document.querySelector('.counter__counter-incompleted');
const counterCompleted = document.querySelector('.counter__counter-completed');

const buttonShowAll = document.querySelector('.counter__button-all');
const buttonShowActive = document.querySelector('.counter__button-incompleted');
const buttonShowCompleted = document.querySelector('.counter__button-completed');

// Функция отрисовки одной задачи из шаблона
function renderTask(task) {
    const element = template.cloneNode(true);
    const checkbox = element.querySelector('.to-do__checkbox');

    element.querySelector('.to-do__task').value = task.value;
    if (task.isDone) {
        checkbox.checked = task.isDone
    };

    checkbox.addEventListener('change', handleCheckbox);
    element.querySelector('.to-do__delete').addEventListener('click', handleDeleteTask);

    container.append(element);
}

// Функция для обновления счетчика после каждого действя над задачей
function updateCounter() {
    counterAll.textContent = list.length;
    counterActive.textContent = list.filter(item => !item.isDone).length;

    counterCompleted.textContent = counterAll.textContent - counterActive.textContent
}

// Отрисовка существующих(сохраненных ранее) задач из массива
function initialRender() {
    list.forEach(item => {
        renderTask(item)
    });
    updateCounter();
}

initialRender();

// Добавление новой задачи в масиив и ее отрисовка
function handleAddItem() {
    const input = document.querySelector('.to-do__input');

    renderTask(input);
    list.push({
        value: input.value,
        isDone: false
    });

    updateCounter();

    form.reset()
}

// Удаление задачи из масиива и со страницы
function handleDeleteTask() {
    list = list.filter(item => {
        return item.value !== this.parentElement.querySelector('.to-do__task').value
    })

    updateCounter();

    this.parentElement.remove();
}

// Обновить значение isDone в массиве задач
// Получилось сложно, нужно пересмотреть логику
function handleCheckbox() {
    list = list.map(item => {
        if (item.value === this.parentElement.querySelector('.to-do__task').value) {
            return {
                value: item.value,
                isDone: this.checked
            };
        }
        return item;
    })

    updateCounter();
}

function handleShowActiveList() {
    container.innerHTML = "";

    list.forEach(item => {
        if (!item.isDone) {
            renderTask(item)
        }
    })
}

function handleShowAllList() {
    container.innerHTML = "";

    list.forEach(item => {
            renderTask(item)
    })
}

function handleShowDoneList() {
    container.innerHTML = "";

    list.forEach(item => {
        if (item.isDone) {
            renderTask(item)
        }
    })
}

// Слушатель для формы создания новой задачи
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    handleAddItem();
});

buttonShowActive.addEventListener('click', handleShowActiveList);
buttonShowCompleted.addEventListener('click', handleShowDoneList);
buttonShowAll.addEventListener('click', handleShowAllList);

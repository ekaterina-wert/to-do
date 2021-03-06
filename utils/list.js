// предполагается, что наш список хранится на сервере, чтоб мы могли вызывать его в любой момент на любом устройства
// массив ниже является имитацией такого списка
export const initialList = [
    {
        value: "Создание новых задач по enter",
        isDone: true
    },
    {
        value: "Изменение состояния выполнено/не выполнено",
        isDone: true
    },
    {
        value: "Удаление задач",
        isDone: true
    },
    {
        value: "Удаление всех выполненных задач",
        isDone: false
    },
    {
        value: "Редактирование задачи по двойному клику",
        isDone: false
    },
    {
        value: "Счетчики задач",
        isDone: false
    },
    {
        value: "Фильтр задач",
        isDone: false
    },
    {
        value: "Валидация формы",
        isDone: false
    },
    {
        value: "Разбиение списка задач по 5 на страницу",
        isDone: false
    },
]
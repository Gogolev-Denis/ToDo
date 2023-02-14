// ToDo список задач

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHadler);

function formHadler(event) {
	event.preventDefault();

	//Получаем название значение из инпут
	const tascText = todoInput.value;


	//Создаем тег li с попошю элемента
	const newTask = document.createElement('li');
	newTask.innerText = tascText;


	//Кнопка удалить
	const deleteBtn = document.createElement('button');
	deleteBtn.setAttribute('role', 'button');
	deleteBtn.innerText = 'Удалить';
	deleteBtn.style['margin-left'] = '15px';
	newTask.append(deleteBtn);

	//Добовляем событие по клику
	deleteBtn.addEventListener('click', function() { 
		this.closest('li').remove();
	});

	//Добовлем елемент на странитцу
	todoList.append(newTask);

	// очишаем поле
	todoInput.value = '';

	//фокус на поле вода
	todoInput.focus();
};
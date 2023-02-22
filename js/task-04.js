// Створи змінну counterValue, в якій буде зберігатися
//поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких
//збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
console.log(decrementBtn);
const value = document.querySelector("#value");
console.log(value);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
console.log(incrementBtn);

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);

const counter = {
	counterValue: 0,
	decrement() {
		this.counterValue -= 1;
	},
	increment() {
		this.counterValue += 1;
	},
};

function decrementValue() {
	counter.decrement();
	return (value.textContent = counter.counterValue);
}
function incrementValue() {
	counter.increment();
	return (value.textContent = counter.counterValue);
}

const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const value = document.querySelector("#value");
const incrementBtn = document.querySelector(`button[data-action="increment"]`);

const counter = {
	counterValue: 0,
	decrement() {
		this.counterValue -= 1;
		value.textContent = counter.counterValue;
	},
	increment() {
		this.counterValue += 1;
		value.textContent = counter.counterValue;
	},
};

decrementBtn.addEventListener("click", counter.decrement.bind(counter));
incrementBtn.addEventListener("click", counter.increment.bind(counter));

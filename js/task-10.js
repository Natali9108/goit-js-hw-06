const refs = {
	input: document.querySelector("input"),
	createBtn: document.querySelector("button[data-create]"),
	destroyBtn: document.querySelector("button[data-destroy]"),
	boxes: document.querySelector("#boxes"),
};

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const createBoxes = (amount) => {
	amount = refs.input.value;

	for (let i = 0; i < amount; i += 1) {
		let newBox = document.createElement("div");
		newBox.style.width = `${30 + 10 * i}px`;
		newBox.style.height = `${30 + 10 * i}px`;
		newBox.style.backgroundColor = getRandomHexColor();
		console.log(newBox);
		refs.boxes.append(newBox);
	}
};

refs.createBtn.addEventListener("click", createBoxes);

refs.destroyBtn.addEventListener("click", function destroyBoxes() {
	refs.boxes.innerHTML = "";
	refs.input.value = "";
});

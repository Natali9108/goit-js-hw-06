const refs = {
	spanText: document.querySelector(".color"),
	changeColorBtn: document.querySelector(".change-color"),
};

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const handelChangeBackgroundColorBody = (event) => {
	document.body.style.backgroundColor = getRandomHexColor();
	refs.spanText.textContent = getRandomHexColor();
};

refs.changeColorBtn.addEventListener("click", handelChangeBackgroundColorBody);

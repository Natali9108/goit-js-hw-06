const refs = {
	input: document.querySelector("#font-size-control"),
	spanText: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputFontSizeControl);
function onInputFontSizeControl(event) {
	const rangeValue = event.currentTarget.value;
	refs.spanText.style.fontSize = `${rangeValue}px`;
}

const refs = {
	input: document.querySelector("#font-size-control"),
	spanText: document.querySelector("#text"),
};

refs.input.addEventListener("change", onInputFontSizeControl);
function onInputFontSizeControl() {
	refs.spanText.style.fontSize = `${refs.input.value}px`;
}

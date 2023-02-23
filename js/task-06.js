const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
	const symbolLenght = event.currentTarget.value.length;
	const defaultValue = Number(event.currentTarget.dataset.length);
	if (symbolLenght === defaultValue) {
		event.currentTarget.classList.add("valid");
		event.currentTarget.classList.remove("invalid");
	} else
		event.currentTarget.classList.remove("valid"),
			event.currentTarget.classList.add("invalid");
}

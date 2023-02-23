const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlurInput);

function onBlurInput() {
	if (input.value.length === Number(input.dataset.length)) {
		input.classList.add("valid");
		input.classList.remove("invalid");
	} else input.classList.remove("valid"), input.classList.add("invalid");
}

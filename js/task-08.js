"use strict";

const formRef = document.querySelector(".login-form");

const handelChekForm = (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;
	if (email.value === "" || password.value === "") {
		return alert("Всі поля повинні бути заповнені");
	}
	const value = {
		Email: `${email.value}`,
		Password: `${password.value}`,
	};
	console.log(value);
	event.currentTarget.reset();
};

formRef.addEventListener("submit", handelChekForm);

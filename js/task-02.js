const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const createElementItem = (ingredients) => {
	return ingredients.map((ingredient) => {
		const itemRef = document.createElement("li");
		itemRef.textContent = ingredient;
		itemRef.classList = "item";
		return itemRef;
	});
};

const elements = createElementItem(ingredients);
ingredientsRef.append(...elements);

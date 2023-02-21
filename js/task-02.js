// Напиши скрипт, який для кожного елемента масиву
//ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй
// метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список
//ul#ingredients.

const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

// const elements = ingredients.map((ingredient) => {
// 	const itemRef = document.createElement("li");
// 	itemRef.textContent = ingredient;
// 	itemRef.classList = "item";
// 	return itemRef;
// });

//

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

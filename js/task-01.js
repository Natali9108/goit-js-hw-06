const categoriesItemRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemRef.length}`);

[...categoriesItemRef].map((el) =>
	console.log(`Category: ${el.querySelector("h2").textContent}
Elements: ${el.querySelector("ul").children.length}`)
);

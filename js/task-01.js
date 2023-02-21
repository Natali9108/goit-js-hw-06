const categoriesItemRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemRef.length}`);

for (let el of categoriesItemRef) {
	console.log(`Category: ${el.querySelector("h2").textContent}
	  Elements: ${el.querySelector("ul").children.length}`);
}

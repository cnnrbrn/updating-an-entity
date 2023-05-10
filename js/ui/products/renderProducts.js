export default function renderProducts(products) {
	const productsContainer = document.querySelector("#productsContainer");
	productsContainer.innerHTML = "";
	const productsHtml = products.map((product) => createProduct(product));
	productsContainer.append(...productsHtml);
}

function createProduct(product) {
	const div = document.createElement("div");
	div.classList.add("product");
	const span = document.createElement("span");
	span.innerText = product.title;
	div.append(span);
	const editButton = document.createElement("a");
	editButton.classList.add("btn");
	editButton.classList.add("btn-primary");
	editButton.innerText = "Edit";
	editButton.href = `/dashboard/edit.html?id=${product.id}`;
	div.append(editButton);
	return div;
}

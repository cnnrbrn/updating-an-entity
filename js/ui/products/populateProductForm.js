import { displayEditProductHeading } from "./displayEditProductHeading.js";

export function populateProductForm(product) {
	const form = document.querySelector("#updateProductForm");
	form.title.value = product.title;
	form.price.value = product.price;
	form.description.value = product.description;
	form.id.value = product.id;
	form.querySelector("fieldset").disabled = false;
	displayEditProductHeading(`Editing ${product.title}`);
}

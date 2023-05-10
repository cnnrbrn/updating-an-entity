import displayMessage from "../../ui/common/displayMessage.js";
import * as api from "../../api/products/index.js";
import { displayEditProductHeading } from "../../ui/products/displayEditProductHeading.js";

export function updateProductListener() {
	const form = document.querySelector("#updateProductForm");

	if (form) {
		form.addEventListener("submit", handleUpdateProduct);
	}
}
async function handleUpdateProduct(event) {
	event.preventDefault();
	const form = event.target;
	const data = new FormData(form);
	const id = data.get("id");
	const title = data.get("title");
	const description = data.get("description");
	const price = Number(data.get("price"));

	const button = form.querySelector("button");
	button.innerText = "Updating...";

	const fieldset = form.querySelector("fieldset");
	fieldset.disabled = true;

	displayEditProductHeading(`Updating ${title}...`);

	try {
		const bodyData = { title, description, price };
		await api.updateProduct(id, bodyData);
		displayMessage("success", "The product was updated", "#message");
		displayEditProductHeading(`Editing ${title}`);
	} catch (error) {
		console.error(error);
		displayMessage("danger", error, "#message");
	} finally {
		button.innerText = "Update";
		fieldset.disabled = false;
	}
}

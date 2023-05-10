import * as api from "../../api/products/index.js";
import { populateProductForm } from "../../ui/products/populateProductForm.js";
import displayMessage from "../../ui/common/displayMessage.js";
import { getParam } from "../../helpers/variables.js";
import { updateProductListener } from "./updateProductListener.js";

export function populateProductFormListener() {
	const productId = getParam("id");

	if (!productId) {
		return (document.location.href = "/dashboard");
	}

	fetchProduct(productId);
}

async function fetchProduct(id) {
	try {
		const product = await api.fetchProduct(id);
		populateProductForm(product);
		updateProductListener();
	} catch (error) {
		console.log("Error fetching product");
		displayMessage("danger", error, "#updateProductForm");
	}
}

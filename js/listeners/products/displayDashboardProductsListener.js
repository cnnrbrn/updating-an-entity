import * as api from "../../api/products/index.js";
import renderProducts from "../../ui/products/renderProducts.js";
import displayMessage from "../../ui/common/displayMessage.js";

export function displayDashboardProductsListener() {
	window.addEventListener("DOMContentLoaded", displayAdminProducts);
}

async function displayAdminProducts() {
	try {
		const products = await api.fetchProducts();
		renderProducts(products);
	} catch (error) {
		console.log(error);
		displayMessage("danger", error, "#productsContainer");
	}
}

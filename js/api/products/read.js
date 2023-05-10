import { BASE_URL } from "../../constants/api.js";
import authenticatedFetch from "../authenticatedFetch.js";

export async function fetchProducts() {
	const url = `${BASE_URL}products`;

	const response = await authenticatedFetch(url);

	if (!response.ok) {
		throw new Error(await response.text());
	}

	const json = await response.json();

	return json.products;
}

export async function fetchProduct(id) {
	if (!id) {
		throw new Error("No ID provided");
	}

	const url = `${BASE_URL}products/${id}`;

	const response = await authenticatedFetch(url);

	if (!response.ok) {
		throw new Error(await response.json());
	}

	return await response.json();
}

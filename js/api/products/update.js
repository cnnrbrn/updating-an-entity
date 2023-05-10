import authenticatedFetch from "../authenticatedFetch.js";
import { BASE_URL } from "../../constants/api.js";

export async function updateProduct(id, data) {
	const url = `${BASE_URL}products/${id}`;

	const options = {
		method: "PUT",
		body: JSON.stringify(data),
	};

	const response = await authenticatedFetch(url, options);

	if (!response.ok) {
		const json = await response.json();
		console.log(json.message);
		throw new Error(json.message);
	}

	return await response.json();
}

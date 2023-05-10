import * as storage from "../services/storage.js";

export default function authenticatedFetch(url, options = {}) {
	const token = storage.get("token");

	if (!token) {
		throw new Error("No token found");
	}

	const myOptions = {
		...options,
		headers: {
			"Content-Type": "application/json;",
			Authorization: `Bearer ${token}`,
		},
	};

	return fetch(url, myOptions);
}

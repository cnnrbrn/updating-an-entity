// import * as storage from "../services/storage.js";
import { getToken } from "../helpers/storage.js";

export default function authenticatedFetch(url, options = {}) {
	const token = getToken();

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

export function getParam(param) {
	const params = new URLSearchParams(window.location.search);
	return params.get(param);
}

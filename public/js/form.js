window.onload = () => {
	document.querySelector("#form").addEventListener("reset", (e) => {
		e.preventDefault();
		window.location.href = window.location.href;
	});
};

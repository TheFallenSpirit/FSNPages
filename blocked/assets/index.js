window.onload = () => {
	const url = document.getElementById('url');
	url.innerText = window.location.hostname;

	fetch('https://json.geoiplookup.io').then((res) => {
		res.json().then((data) => {
			const ip = document.getElementById('ip');
			ip.innerText = data.ip;
		});
	});
};

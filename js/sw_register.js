//Service worker are supported.
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw_cached_pages.js')
	.then(function() {
		console.log('Registration successful!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}

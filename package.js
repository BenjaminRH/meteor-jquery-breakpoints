Package.describe({
	summary: "Define breakpoints for your responsive design, and Breakpoints.js will fire custom events when the browser enters and/or exits that breakpoint."
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files([
		'lib/breakpoints/breakpoints.js'
		], 'client');
});
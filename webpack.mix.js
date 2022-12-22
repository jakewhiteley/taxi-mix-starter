let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public')
	.setPublicPath('public')
	.sass('resources/assets/scss/style.scss', 'public')

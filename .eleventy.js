const date = Date.now()

function getFromManifest(name) {
	try {
		const assets = require("./public/mix-manifest.json")

		if (name[0] !== '/') {
			name = '/' + name
		}

		return assets[name] || name + '?id=' + date
	} catch (error) {
		return name + '?id=' + date
	}
}

module.exports = function (eleventyConfig) {
	/**
	 * Add the asset shortcode to fetch an asset name from mix-manifest.json
	 *
	 * @example {% asset 'css/style.css' %}
	 */
	eleventyConfig.addShortcode("asset", function (name) {
		return getFromManifest(name)
	});

	eleventyConfig.setBrowserSyncConfig({
		files: ['public/**/*']
	})

	return {
		dir: { input: 'resources/templates', output: 'public', data: '_data' },
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md', 'html'],
		htmlTemplateEngine: 'njk'
	}
}
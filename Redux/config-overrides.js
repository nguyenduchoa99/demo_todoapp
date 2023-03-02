const { resolve } = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = {
	webpack: override(
		addWebpackAlias({
			'@components': resolve(__dirname, 'src/components'),
			'@pages': resolve(__dirname, 'src/pages')
		})
	)
};

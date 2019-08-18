module.exports = {
	extends: ['react-app', 'plugin:import/typescript'],

	settings: {
		linkComponents: { name: 'Link', linkAttribute: 'to' },
	},

	rules: {
		'@typescript-eslint/no-angle-bracket-type-assertion': 'off',
		'no-shadow': 'warn',
		'import/no-useless-path-segments': 'warn',
		'import/no-unresolved': 'error',
		'jsx-a11y/alt-text': [
			'warn',
			{
				img: ['Img'],
			},
		],
		'jsx-a11y/anchor-has-content': [
			'warn',
			{
				components: ['Link'],
			},
		],
		'jsx-a11y/anchor-is-valid': [
			'warn',
			{
				components: ['Link', 'ExternalLink'],
				specialLink: ['to'],
				aspects: ['noHref', 'invalidHref'],
			},
		],
		'jsx-a11y/img-redundant-alt': [
			'warn',
			{
				components: ['Img'],
			},
		],
		'jsx-a11y/lang': 'error',
	},
}

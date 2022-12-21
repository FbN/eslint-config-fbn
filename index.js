module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    plugins: ['functional'],
    extends: [
        'standard',
        'plugin:functional/recommended',
        'plugin:functional/stylistic',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    }
}

// https: //www.npmjs.com/package/eslint-plugin-react-hooks#installation

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        "react"
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        "eslint:all",
        "plugin:react/all",
        "plugin:react-hooks/recommended"
    ],
};
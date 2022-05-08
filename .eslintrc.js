module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends":"eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "extends": "airbnb-base/legacy",
    "rules": {
        "semi": ["off", "always"],
        "quotes": ["off", "double"]
    },
}

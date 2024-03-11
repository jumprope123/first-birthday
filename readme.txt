yarn create next-app --typescript

yarn eslint --init

.prettierrc 
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}

.eslintrc.json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["standard-with-typescript", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "@typescript-eslint/space-before-function-paren": "off",
    "react/react-in-jsx-scope": "off"
  }
}

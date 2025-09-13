initial setup
```
source init-env-nodejs19.sh
npx create-react-app epf --template typescript
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto @mui/icons-material @mui/x-data-grid
npm start
```

start
```
source init-env-nodejs24.sh
npm start
```

deploy
```
npm run deploy
```


github pages
```
1. npm install gh-pages --save-dev

2. add to package.json
  "homepage": "weetech-software.github.io/epf",

  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",

```

upgrade node
```
$ # move to another dir
$ mv node_modules/ node_modules-22
$ source init-env-nodejs24.sh
$ npm install
$ # check
$ npm start
```

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

check if package require update
```
$ # check if there is any update
$ npm outdated
$ npm list --depth=0
$ # update existing packages
$ npm update
$ # actual upgrade
$ npx npm-check-updates -u
$ npm install
$ # check if there is any existing UI break
$ # commit package.json and package-lock.json
```

guide on actual upgrade
```
First: tooling (eslint, prettier, testing libs, vite/webpack, etc.)
Then: TypeScript (4.9 → 5.x, usually safe)
Then: React + MUI (biggest risk, test UI thoroughly)

npm install typescript@latest
npm run build
If build/test pass → commit → continue.

to upgrade a package
$ npm install package-name@latest

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

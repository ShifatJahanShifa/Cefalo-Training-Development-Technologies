# yarn vs npm vs pnpm

When we talk about package manager, we talk about - 
1. speed of installation of all packages 
2. correct way caching them and save in disk space

Thus pnpm is better than both yarn and npm.
yarn takes a lot of space when caching all modules. When we install a dependency of dependency, it creates a copy. 

Both yarn and npm have flat structure of modules. 
yarn installs packages faster than npm. It gives us caching benefit. 
But pnpm leverages hard and soft link. It has nested structure. 

npm, yarn, pnpm
Package manager differences basis:

1. dependency resolution algorithm. node_module- flat or nested. node_modules vs PnP
2. lock file formats
3. package storage
4. monorepo support
5. flexibility degree

Previously dependencies were downloaded and linked in the html file. 
2010- npm
2016- yarn (yet another resource negotiator) by facebook. It processes parallely to speed up the installation process. Mono repo, cache aware installs, offline caching.
yarn classic, yarn berry.
yarn berry- 2020. .pnp.cjs file where lies dependencies lookup tables. packages are zipped. 
2017- pnpm. 
npm, yarn- redundant storage of dependencies.


Installation time: pnpm fastest than npm, yarn.
Folder structure issue: 
npm has flat structure inside node_modules. copy paste 

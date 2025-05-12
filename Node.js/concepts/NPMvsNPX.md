# NPM vs NPX 

NPM- Node Package Manager
NPX- Node Package eXecute

`npm` when we write
```
 npm install lodash
```
It goes to npm registry and install the required library. It can install, update and delete. As it installs in our machine, it takes up space. 
Use case of npm: 
1. install packages. either locally(project-specific) or globally.
2. using it, we can install all of the dependencies and devDependencies of the proejct. (npm install)
3. install dev-dependencies
4. run scripts. we can define custom scripts.
5. The packages that i need to use in my project code 

Example Use Cases for npm install:
Frameworks like express, mongoose, or react.

Utilities like lodash, axios, or jsonwebtoken.

Testing tools like jest, mocha, or chai.

`npx` when we write this we mean that execute the package available in the npm registry. It just runs or executes the package. It does not install the package in my machine. Best for one time use, cli, I don't want to use it frequently.  

Use case of npx: 
1. when i want to run the package without installing it, i can use npx. like i don't need to install the package to create a react app (create-react-app). I just want that using this package, i can create an app. that's it. so, in this case, i can use npx. 
2. try out a new package quickly
3. running a specific version of a package.

Follow-Up: 
> When you're using create-react-app, the best and recommended way is to use npx, not npm.

> You want to persist it in package.json for others or deployment, use npm.

> npx create-react-app, npx eslint, npx prettier, npx tsc.

✅ Use npm install when:
The package is part of your application logic

You need to import/require it in your code (e.g., express, axios, lodash)

It’s needed in your node_modules so the app can run or build

You want to persist it in package.json for others or deployment

✅ Use npx when:
You just want to run a CLI tool once or temporarily

You don’t need to import the package in your code

You want to avoid global installs

Examples: npx create-react-app, npx eslint, npx prettier, npx tsc
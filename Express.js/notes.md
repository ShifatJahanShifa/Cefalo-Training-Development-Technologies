Express.js is a powerful framework of Node.js. It is a lightweight framework. 
> What does it mean by lightweight??
> when we write npm install, from where it installs everything i mean looking at what file?

When I type npm init, it means it will initialize a project and launch a utility that will create a package.json file for me. 
Why do we need start script? Because when we share our code, we don't want our collaborators to find which file they need to run to start the app. 
Rather we define a generic way to start the app by defining script.

When i install sth with npm install, that will create a package-lock.json file. We don't edit the package-lock.json file. it contains the package with version that is installed also its dependencies together with their version. 

Node modules is the place where my dependencies live.
type: modular . we can use modular js file across the entire app.

Request/Response cycle: 

`request`: 
method: GET
request path: /api
data: query parameter

`handle request`: 
filtering data
throw an error
generate a response

`response`:
resource(JSON)
content-type: application/json
status code: 200, 404
status message: ok

sending a response:
if the method is post, then the callback function is not executed.
HTTP protocol wants us to send data in string not in array. 

With req. pass query param. Grab the query param and store it in a js object. to access the query param and have a js object with them, i can use req.query().

I must have the functionality such that i can take the user's query param and filer data according to it. 

convert a string of boolean value into a boolean type , the easiest way to do that is JSON.parse


Now, come to the path parameter. // done

In a database table or collection, if there are a lot of fields and based on the fields and their specific values, user can query. Remeber, resource is one. you need to manage it.

I can override the status code by using status method on response object . 

json method is all small case. When we use json method, under the hood, it sets headers.
controller is just a function or set of functions. 
route and controller.

separate the controller from the routes. 

Router acts like a mini express app.

> My follow up task: create a news api too.

> Follow up: if i use app.get( then?) or what is the syntax of app.use((res,res)) actually??
> search in the details description.

#### Extended Express Learning
method: sendFile(): sends the content of a file.

> explore the difference in the output: res.json() and res(JSON.stringify())  ; need to see
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

### Extra from documentation
Always be careful when setting the app's main js file or the starting js file.
There is sth called `express generator.` 

step: 
1. at first import express
2. create instance of express and store it in app
3. define the port
4. listen on the port or start the server. place it at the last. 

> I have a q about when to use res.send and res.json method

`res.send()` it is a general purpose method. i can use this method when i am sending string, html or object, buffer. based on what type of data i am sending, the `content-type` header is set. 
There is a tip: 
when i call res.json(), it internally calls res.send() method with some extra formatting. 
So, when i need to specifically send json response from an api, i should use this method.
to set header, i can use res.set() method. 

#### when to use what

| Situation                            | Server Side (Express)           | Client Side (JS / fetch)            |
| ------------------------------------ | ------------------------------- | ----------------------------------- |
| REST API sending object              | `res.json({ ... })`             | `await res.json()`                  |
| Sending plain HTML or text           | `res.send('<h1>Welcome</h1>')`  | `await res.text()`                  |
| Sending a pre-serialized JSON string | `res.send(JSON.stringify(...))` | `await res.text()` + `JSON.parse()` |

> visit the link: https://stackoverflow.com/questions/19041837/difference-between-res-send-and-res-json-in-express-js 
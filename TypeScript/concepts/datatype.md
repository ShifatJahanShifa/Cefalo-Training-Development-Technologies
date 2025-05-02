# Data Types

> Contextual typing in TypeScript means that TypeScript can infer the type of something based on how it’s used.

`void` we can use void anywhere but it is especially relevant to the function context. void and undefined are different in ts. 
1. what is void type?
2. void is a type, not value. we can assign undefined and null to it. 
> more on void: https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-functions-returning-non-void-assignable-to-function-returning-void
 

> what does it mean by type level extension of js? 
the typescript features that are called type-level extension of js because they exists only in the type checking phase. when the ts is compiled to js, the features don't add up any js code in the compiled js. 

so, `enum` is a kind of feature of ts that is not type level extension of js. ts provides both numeric and string based enum. there are two types of enum members.  

1. constant enum member
2. computed enum member

constant enum member example:  

```ts
enum Position {
    first=1,
    middle,
    last=middle+1
}
```

here, the members considered to be the constant enum members are: 
1. auto incremented
2. resolve at compile time
3. member which resolveed by other constant member
4. assigned constant value

Now, string enum. it has subtle runtime differences with numeric enum.
1. don't auto-increment
2. must be initialized.
3. 

🧠 Summary Table

Feature	                                Numeric Enum	                   String Enum
Auto-increment	                            ✅ Yes	                         ❌ No
Readability at runtime	               ❌ Often opaque	                ✅ Human-friendly
Reverse mapping	                            ✅ Yes	                    ❌ Not available
Serialization-friendly	               ❌ Needs mapping	                ✅ Directly readable

Heterogenous enum is not advised to use. 

constant enum expression is to be evaluated to NaN or Infinity, then it will throw compiel time error. 

enums are objects that exist in the runtime. but `keyof` keyword works differently there. when we compile the enum, it becomes object at runtime.


`tuple` 
characteristics: 
1. array type
2. fixed number of elem
3. their types we know
4. their position we know

`class` 
we can have cross instance private access.   

> Object, Interface, Class 

**Object** We create object which is present in runtime and store the actual data. But it has some limitations. Like two objects-
```ts
let user1={
    name: '',
    age: 10
}

let user2={
    name: 'd',
    age: 30
}
```
We can see that we have two objects which have same properties. If we have some other objects like this, it will create redundancy as each time we will write the objects like this. So, we need to define a structure or shape for all of the user objects which is much handy. So interface came. 

**Interface** Using interface, we define a structure or shape of our object. It makes the object a type. Using the object type, we can have multiple objects of the same shape. Like-
```ts
interface user1 {
    name: string,
    age: number,
    getInfo: ()=> string
}

let user1={
    name: 'd',
    age: 30,
    getInfo: ()=>{
        return this.name+' '+this.age
    }
}
``` 

The interface presents only in compile time for type checking. It is not present in runtime. Using interface, we just define the shape no logic or data is defined. Later on, to support this we have class. 

**Class** Class is a blueprint using which we can create objects. The Class blueprint offers more data and template logic. It is present in runtime. 
```ts
Class car {
    name: string
    model: string

    constructor(name: string, model: string)
    {
        this.name=name
        this.model=model
    }
    info(): void 
    {
        // logic
    }
}
``` 
Using class, we can have other OOP facilities like constructor, method, interface, inheritance, encapsulation, abstraction etc. 

> any, unknown, never, void 

**Any** It allows any type of value. It disables type checking. It can cause runtime errors like - 
```ts
function f(name: any)
{
    console.log(name.toUpperCase())
}

f(9)
```
It will give me runtime error. It was introduced with the intention to gradually migrate from js to ts code. To solve this, we have Unknown type introduced by ts 3.0.

**Unknown** By using unknown type, typescript will enforce to narrow down the type based on control flow analysis. 
```ts
function f(name: unknown)
{
    if(name && typeof name === string)
    console.log(name.toUpperCase())
}

f(9)
```

We can now safely run the code without any runtime error. 

**Never** It represents the type of values that never occur. Like type guard usage ( no console.log). The function that returns never, should not reach the function endpoint. Use case- unhandled case in switch statement. 

`as` type assertion
`any` 
`as const` const assertion, no widening of type, array becomes readonly tuple, readonly object. 

`Type compatibility` means two types are same type if their structure are same. The structural typing based on the shape or members of the type, not based on the name of the type. 
There are two types of compatibility. 
1. subtype compatibility
2. assignment compaitibility
assignment compatibility extends subtype compatibility. assignment compatibility has any to and from feature and enum to number conversion. 

## combining types 
We can combine two or more types using union operator `|` into one type which can tell all the possible types.
`union` type is useful actually. suppose, two types exist. user, admin. i am now user. one day i may become admin. We may need to narrow down the union type.
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
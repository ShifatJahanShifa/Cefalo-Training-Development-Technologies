# All about classes 


1. normaly i can add field
2. if i want that a filed must be initialized before the constructor finishes, we can set the compiler option like `--strictPropertyInitialization` along with `--strictNullChecks`. Inthat case i need to initialize the field inside the constructor or i can set it using `definite assignment assertion operator` like `!`. (Good thing to know).
3. iF i set a field to be readonly, then i can't assign it a value outside of the constructor.
4. The difference between constructor and function is - the constructor can't have the type parameters and return type. It simply returns the instance type. 
5. super call
6. methods: type annotation add, inside the method body, to access everything, i needv to use this keyword. otherwise it will try to find out the property or method in the enclosing scope.
7. getter/setter: if i use set or get before a field, we can do that. in that case the method name for getter and setter can be same. also there happens some inference. 
    a) if i have only getter but not setter then the field will automatically be readonly.
    b) and if i dont explicitly use any type for parameter in the setter method, then it will oinfer the type form the return value of the setter method.
8. but since typescript 4.3, it is possible to have different types of accessor. 
9. getter/ setter: Accessor are special methods in class . There are two types of accessors. a) getter, b) setter. get/set. when we use them, it may seem like they are property but behind the scene theya re methods calling. 


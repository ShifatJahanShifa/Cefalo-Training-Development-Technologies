# Generics 
Well, i have seen a lot of ways to use generics. But in most cases I may use one or two generics. I may not use extending or default values for generics. In most cases, I will use generic in function, very few cases in generic type.

Uing any at first place, we lose information (like what is the actual type of the returned value). Also it is not type safe. So, we need to have some mechanism such that when it returns to us, we can know what type is returned. For that reason, we can have generic which holds the type. 

we can extend type in generic to tell that i know what is the exactly type it is. 
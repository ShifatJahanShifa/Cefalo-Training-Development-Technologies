export default class User{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}

export function printName(user)
{
    console.log(`USER's name is ${user.name}`);
}

export function printAge(user)
{
    console.log(`USER's age is ${user.age}`);
}


// export { printName, printAge}
import User, { printName, printAge} from "./esm.js";

const user=new User('shifa',22)
console.log(user);
printName(user)
printAge(user)
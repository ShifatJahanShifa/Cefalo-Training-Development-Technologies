export {}

interface User {
    readonly dbId: number
    email: string,
    userId: number,   
    googleId?: string,
    startTrial: ()=> string, // that means it is a function that returns 
    // startTrial(): string
    getCoupon(couponName: string, off: number): number
}

// reopening interface
interface User {
    getToken: string
}

const shifa: User={dbId: 2, email: 'as@gmail.com', userId: 1,startTrial:()=>{
    return 'trial started'
},getCoupon: ()=>{
    // couponName= 'cnm', off: 7
    return 3
},getToken: 'zx'}

console.log(shifa.startTrial(), shifa.getCoupon('s',3),shifa)



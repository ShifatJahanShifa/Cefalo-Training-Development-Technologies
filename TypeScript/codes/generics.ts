export {}

//---------------------------------------- generic function silo--------------------------

// when to use generics
// --------------------------------------------- at first support only numbers
// function getFirstElement(array: number[])
// {
//     array[2]=9
//     return array[0]
// }

// let array=[1,2,3]
// console.log(getFirstElement(array));
// console.log(array);


// ------------------------------------------------ need to support string array
// function getFirstElement(array: any)
// {
//     array[2]=9
//     return array[0]
// }

// let array=[1,2,3]
// console.log(getFirstElement(array));
// // console.log(array);

// let strings: string[]=['a','s','f']
// console.log(getFirstElement(strings));

// ----------------------------------------------------- using union
// function getFirstElement(array: (number | string)[])
// {
//     array[2]=9
//     return array[0]
// }

// let array=[1,2,3]
// console.log(getFirstElement(array));
// // console.log(array);

// let strings: string[]=['a','s','f']
// console.log(getFirstElement(strings));

//---------------------------------------------------- now using generics
// function getFirstElement<ElementType>(array: ElementType[])
// {
//     // array[2]=9
//     return array[0]
// }

// let array=[1,2,3]
// console.log(getFirstElement(array));
// // console.log(array);

// let strings: string[]=['a','s','f']
// console.log(getFirstElement<string>(strings));

// // in map
// // let map=new Map<string,number>()
// // map.set('d',5) 
// let map=new Map([['a',12]])

//-------------------------------------------- generic type ------------------------------------
// this is very common thing in API response. Generic type. 

// at first using any
// type ApiResponse = {
//     data: any,
//     isError: boolean
// }

// const response: ApiResponse = {
//     data: {
//         name: 'shifa',
//         age: 23
//     },
//     isError: false
// }

// later i am using generic
type ApiResponse<Data> = {
    data: Data
    isError: boolean
}

type mytype={
    name: string,
    age: number
}

const response: ApiResponse<mytype> = {
    data: {
        name: 'shifa',
        age: 23
    },
    isError: false
}

type myblog={
    title: string,
    liked: number
}
const blogResponse: ApiResponse<myblog>={
    data: {
        title: 'my blog',
        liked: 1
    },
    isError: false
}

type statusResponse={
    status: number
}
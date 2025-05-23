import { log } from 'console';
import { PrismaClient } from './generated/prisma'

// using log, every time i runa query on my database, it is gonna log that query. // {log: ['query']}
const prisma = new PrismaClient()     // i can create up to 5 connections with database using prisma client.
// use `prisma` in your application to read and write data in your DB


async function main()
{
    //... queries 
    // ---------------------------------------- create operation
    // const user=await prisma.user.create({data: { name: 'shifa'}})
    // const users=await prisma.user.findMany() 
    await prisma.user.deleteMany()
    const users=await prisma.user.createMany({
        data: [{
            name: 'shifa',
            age: 23,
            email: 'a@gmail.com',
            // userPreference: {     // i want to set an optional property here. this is an object.
            //     create: {    // and this is a function that will create an object of type user preferences
            //         emailUpdates: true
            //     }
            // }
        },
        {
            name: 'asd',
            age: 22,
            email: 'aa@gmail.com',
        }],
        // include: {
        //     userPreference: true
        // }
        // select: {
        //     name: true
        // }

    })
    console.log(users);
    
    
    
    //------------------------------------ read operation
    // -----uniqueness function
    const readuser=await prisma.user.findUnique({
        where: {   // think where as a fucntion
            // email: 'a@gmail.com'  based on one filed
            name_age: {
                name: 'shifa',
                age: 25
            }
        }
    })  // find things based on the unique keys or field in the database. it will return one value as it is for unique.
    
    console.log(readuser);
    
    //--------- find user by a specific property
    const readuserFindFirst=await prisma.user.findFirst({
        where: {   // think where as a fucntion
            // email: 'a@gmail.com'  based on one filed
            name: 'shifa'
        }
    }) 
    
    // find many users
    //  const readuserFindFirst=await prisma.user.findMany({
        
    console.log(readuserFindFirst);
    // to get the distinct output, i can use distinct property, distinct: ['name1','name2'] ; combination of both of the properties
    // also i can apply pagination here. property usage, 'take'
    const readuserFindmany=await prisma.user.findMany({
        where: {   // think where as a fucntion
            // email: 'a@gmail.com'  based on one filed
            // name: 'shifa'   // also i can use equals here 
            name: {
                // equals: 'shifa'  // likewise, we have 'not' similar to not equals 
                in: ['shifa','asd']  // notIn
            },
            age: {
                lt: 23
            },
            // email: {
            //     contains: '@gmail.com'   //endswith, startswith
            // }
            // defining with and
            AND: [{email: {startsWith: 'a'}},{email: {endsWith: '.com'}}] // similarly i can use or with it. when i want to query on the same field, i can use and, or. 
            // more: i can use not to negate the thing.
        },
        orderBy: {
            age: 'asc' // for sorting
        },
        // take: 2, // for pagination
        // skip: 1  // skip the elements from the first, show the later
    }) 
    console.log('got the user',readuserFindmany, readuserFindmany.length);


    //------------------- query on relationship

    const userRel=await prisma.user.findMany({
        where: { 
            userPreference: {  // FOR ONE to one rel.
                emailUpdates: true
            },
            writtenPosts: {
                every: {
                    title: 'test'
                }

            }
        },
    }) 
   
    console.log(userRel);


    //--------------------------------------- relationship filtering
    const post=await prisma.post.findMany({
        where: {
            author: {
                is: {
                    age: 22
                }
            }
        }
    })
    
    const updatedUser=await prisma.user.update({  // two functions, updateMany
        where: {
            email: 'a@gmail.com'
            // name: 'zxc'
        },
        data: {
            email: 'as@gmail.com',
            age: {
                increment: 1  // with any number, increment, decrement, multiply, divide.
            }
        }
    })

    console.log(updatedUser)


    const delUser=await prisma.user.delete({
        where: {
            email: 'as@gmail.com'
        }
    })
    console.log(delUser);
    
}

main()
.catch(e=>{
    console.error(e.message)
})
.finally(async()=>{
    await prisma.$disconnect()
})
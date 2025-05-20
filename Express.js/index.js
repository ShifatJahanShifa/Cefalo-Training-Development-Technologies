import express from 'express'
import { startups } from './data.js'


const PORT=8000  // i need a port where i will listen to.

const app=express()              // this is a variable that will hold the app. also it will hold an instance of express

const apiRouter=express.Router()   // creates an instance of express router

const celebrity={
    type: 'action hero',
    date: 'may 2025'
}

app.listen(PORT,()=>{
    console.log(`connected to the server on port ${PORT}`);
    
})                     // this is the first method that i want to use with app. we pass port to the listen method for sure.


// i have implemented it
// app.get('/api',(req,res)=>{

//     let filletredData=startups
//     // console.log(req.query)

//     /**
//      * Challenge:
//     1. When a user hits the /api endpoint with query params, filter the data so 
//     we only serve objects that meet their requirements. 
        
//     The user can filter by the following properties:
//     industry, country, continent, is_seeking_funding, has_mvp

//     Test Cases

//     /api?industry=renewable%20energy&country=germany&has_mvp=true
//     Should get the "GreenGrid Energy" object.

//     /api?industry=renewable%20energy&country=germany&has_mvp=false
//     Should not get any object

//     /api?continent=asia&is_seeking_funding=true&has_mvp=true
//     should get for objects with IDs 3, 22, 26, 29
//      * 
//      */
    
//     // res.json(celebrity)                                    // res object has many methods to deal with task. 


//     // i need to create an object first.
//     const queryObject=req.query
//     const queryParamArray=['industry', 'country', 'continent', 'is_seeking_funding', 'has_mvp']
//     let filteredQueryParam={};
    
//     for (const key in queryObject) {
//         if (queryParamArray.includes(key)) {
//             filteredQueryParam[key]=queryObject[key]
//         }
//     }

//     // let's debug
//     console.log(filteredQueryParam);
    

//     let tempFilteredData=[]
//     let filteredQueryParamKeys=Object.keys(filteredQueryParam)
//     console.log('key',filteredQueryParamKeys);
    
//     for (const data of startups) 
//     {
//         // duita loop getproperty keys kore. getkey
//         let track=1
//         // console.log(data);
        
        
//         filteredQueryParamKeys.forEach(key => {
//             let valueofData=data[key]
//             if(typeof valueofData==='string') valueofData=valueofData.toLowerCase()
//             if(typeof valueofData==='boolean') valueofData=valueofData.toString()
//             if(valueofData!=filteredQueryParam[key]) 
//             {
//                 track=0;
//                 // console.log(key, valueofData, filteredQueryParam[key]);
//                 // console.log(typeof valueofData, typeof filteredQueryParam[key]);
                
//             }
//         });
//         if(track) 
//         {
//             tempFilteredData.push(data)
//         }
//     }
//     filletredData=tempFilteredData
//     res.json(filletredData)

// })                        // i need to pass two object in the callback function. when i request ulr matches with the defined api, then the corresponding callback function is called.


// // at first hold all of the data in a variable. I want to filter the data based on some categories.
// let filletredData=startups




app.get('/api',(req,res)=>{
    let filletredData=startups

    // destructuring concepts
    const { industry, country, continent, is_seeking_funding, has_mvp }=req.query

    // console.log(industry, country, continent, is_seeking_funding, has_mvp)

    if(industry)
    {
        filletredData=filletredData.filter(data=>
            data.industry.toLowerCase()===industry.toLowerCase()
    )
    }

    if(country)
    {
        filletredData=filletredData.filter(data=>
            data.country.toLowerCase()===country.toLowerCase()
    )
    }

    if(continent)
    {
        filletredData=filletredData.filter(data=>
            data.continent.toLowerCase()===continent.toLowerCase()
    )
    }

    if(is_seeking_funding)
    {
        filletredData=filletredData.filter(data=>
            data.is_seeking_funding===JSON.parse(is_seeking_funding.toLowerCase())   // if True, False, the deserialization will break
    )}

    if(has_mvp)
    {
        filletredData=filletredData.filter(data=>
            data.has_mvp===JSON.parse(has_mvp.toLowerCase())
        )
    }

    res.json(filletredData)
})


app.get('/api/crypto-name/:crypto',(req,res)=>{
    console.log(req.params)
    res.json()
})

// using path param
// app.get('/api/:category/:type',(req,res)=>{
//     console.log(req.params)
//     res.json()
// })


app.get('/api/:field/:term',(req,res)=>{
  let filteredData=startups
  
  let { field, term }=req.params

  const allowedFields = ['country', 'continent', 'industry']


  if (!allowedFields.includes(field)) {
    return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
  }


  filteredData=filteredData.filter(data=>
    data[field].toLowerCase()===term.toLowerCase()
  )
  res.json(filteredData)
})
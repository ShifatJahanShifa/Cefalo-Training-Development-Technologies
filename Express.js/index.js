import express from 'express'
import { startups } from './data.js'

const PORT=8000  // i need a port where i will listen to.

const app=express()              // this is a variable that will hold the app. also it will hold an instance of express


const celebrity={
    type: 'action hero',
    date: 'may 2025'
}

app.listen(PORT,()=>{
    console.log(`connected to the server on port ${PORT}`);
    
})                     // this is the first method that i want to use with app. we pass port to the listen method for sure.


app.get('/api',(req,res)=>{
    let filletredData=startups
    // console.log(req.query)

    /**
     * Challenge:
    1. When a user hits the /api endpoint with query params, filter the data so 
    we only serve objects that meet their requirements. 
        
    The user can filter by the following properties:
    industry, country, continent, is_seeking_funding, has_mvp

    Test Cases

    /api?industry=renewable%20energy&country=germany&has_mvp=true
    Should get the "GreenGrid Energy" object.

    /api?industry=renewable%20energy&country=germany&has_mvp=false
    Should not get any object

    /api?continent=asia&is_seeking_funding=true&has_mvp=true
    should get for objects with IDs 3, 22, 26, 29
     * 
     */
    
    // res.json(celebrity)                                    // res object has many methods to deal with task. 


    // i need to create an object first.
    const queryObject=req.query
    const queryParamArray=['industry', 'country', 'continent', 'is_seeking_funding', 'has_mvp']
    let filteredQueryParam;
    
    for (const key in queryObject) {
        if (queryParamArray.includes(key)) {
            filteredQueryParam[key]=queryObject[key]
        }
    }

    let tempFilteredData=[]
    let filteredQueryParamKeys=Object.keys(filteredQueryParam)
    for (const data of startups) 
    {
        // duita loop getproperty keys kore. getkey
        let track=1
        let tempAns={}
        filteredQueryParamKeys.forEach(key => {
            if(data[key]!==filteredQueryParam[key]) 
            {
                track=0;
                
            }
        });
        if(track) 
        {
            tempFilteredData.push(data)
        }
    }
    filletredData=tempFilteredData
    res.json(filletredData)

})                        // i need to pass two object in the callback function. when i request ulr matches with the defined api, then the corresponding callback function is called.


// // at first hold all of the data in a variable. I want to filter the data based on some categories.
// let filletredData=startups
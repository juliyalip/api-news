const express = require('express');
const fetchWeather = require('./fetch-api');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4444




app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.get('/weather', async(req, res, next)=>{
   
try{
  
 
const response = await fetchWeather();
res.send(response)
}catch(err){
  next(err)
}
});

app.get('/get-weather', async(req, res, next)=>{
   
    try{
        const city = req.body;
        if(!city){
            return res.json({message: "enter your city"})
        }
    
    const response = await fetchWeather(city);
    res.send(response)
    }catch(err){
      next(err)
    }
    })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
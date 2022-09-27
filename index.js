const express = require('express');
const fetchWeather = require('./fetch-api');
require('dotenv').config()

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4444




app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.get('/weather', async(req, res, next)=>{
   
try{
  
 
const response = await fetchWeather();
return response
}catch(err){
  next(err)
}
});

app.post('/get-weather', async(req, res, next)=>{
try{
    const {city} = req.body;
    const response = await fetchWeather(city);

    res.status(201).json(response)

}catch(er){
    next(err)
}


    })

    app.use((_, res, __) => {
        res.status(404).json({
          status: 'error',
          code: 404,
          message: 'Use api on routes: /api/tasks',
          data: 'Not found',
        })
      })
      
      app.use((err, _, res, __) => {
        console.log(err.stack)
        res.status(500).json({
          status: 'fail',
          code: 500,
          message: err.message,
          data: 'Internal Server Error',
        })
      })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
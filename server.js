const express= require('express')
const app= express()
const dbConnect= require('./dbConnect')
const port = 5000

app.get('/',(req,res)=>res.send('hello world'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
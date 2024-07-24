const express= require('express')
const app= express()
const dbConnect = require('./dbConnect');
app.use(express.json())
const port =  process.env.PORT ||5000
const userRoute= require('./routes/userRoutes')
app.use('/api/user/',userRoute)


app.get('/',(req,res)=>res.send('hello world'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
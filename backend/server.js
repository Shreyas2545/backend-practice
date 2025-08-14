import express from "express"

const app=express();

app.get('/info',(req,res) => {
    res.send('I am Shreyas Hadawale');
})

const port = process.env.PORT || 4518;

app.listen(port,(req,res) => {
    console.log(`server is runnign at http://localhost:${port}`)
});
import express from "express"

const app=express();

const port = process.env.PORT || 4518;

app.get('/app/age/category',(req,res) => {
    res.send('I am teenager');
})
app.get('/app/age',(req,res) => {
    res.send('I am 18 years old');
})

app.get('/app/age/gender',(req,res) => {
    res.send('I am male');
})

app.get('/app',(req,res) =>{
    res.send(`Learning Connecting Frontend + Backend `)
})

app.get('/app/aim',(req,res) =>{
    res.send(`Aim is to master backend`)
})

app.get('/app/height',(req,res) =>{
    res.send(`My height is 5.6 ft`)
})

app.get('/app/study',(req,res)=>{
    res.send("I am a CO Student !")
})

app.get('/app/name',(req,res)=>{
    res.send("shreyas hadawale here ");
})

app.listen(port,(req,res) => {
     console.log(`server is runnign at http://localhost:${port}`)
});


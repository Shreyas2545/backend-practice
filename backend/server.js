import express from "express"

const app=express();

app.get('/app/info',(req,res) => {
    res.send('I am Shreyas Hadawale');
})

app.get('/app',(req,res) => {
    res.send('<<<Learning Connecting Backend To Frontend>>>');
})
app.get('/app/age',(req,res) => {
    res.send('I am 18 years old');
})

app.get('/app/marks',(req,res) => {
    res.send('I want 95%');
})

const port = process.env.PORT || 4518;

app.listen(port,(req,res) => {
    console.log(`server is runnign at http://localhost:${port}`)
});
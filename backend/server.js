import express from "express"

const app=express();

const port = process.env.PORT || 4518;
// app.get('/app/info',(req,res) => {
//     res.send('I am Shreyas Hadawale');
// })

// app.get('/app',(req,res) => {
//     res.send('<<<Learning Connecting Backend To Frontend>>>');
// })

// app.get('/app/marks',(req,res) => {
//     res.send('I want 95%');
// })

app.get('/app/age/category',(req,res) => {
    res.send('I am teenager');
})
app.get('/app/age',(req,res) => {
    res.send('I am 18 years old');
})
app.get('/app/age/category',(req,res) => {
    res.send('I am teenager');
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

app.listen(port,(req,res) => {
     console.log(`server is runnign at http://localhost:${port}`)
});


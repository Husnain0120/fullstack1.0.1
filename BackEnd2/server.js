import express from 'express'

const app = express();

// app.get('/',(req,res)=>{
//     res.send("server is ready")
// })

app.get("/api/joke",(req,res)=>{
    const jokes =[ {
        id:1,
        tittle : "A Joke",
        content: 'This is joke'
    },
    {
        id:2,
        tittle : "Another Joke",
        content: 'This is another joke'
    },
    {
        id:3,
        tittle : "Antho third Joke",
        content: 'This is third joke'
    },
    {
        id:1,
        tittle : "A fourth Joke",
        content: 'This is fourth joke'
    }];
    res.send(jokes)
})

const port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
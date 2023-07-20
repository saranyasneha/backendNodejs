const express = require("express");
const format=require("date-format");
const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/",(req,res)=>{
    res.status(200).send("<h1>hi I am Saranya</h1>");
})

app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial={
        username:"saranya",
        followers:66,
        follows:78,
        date:format.asString("dd-MM-yy hh:mm:ss",new Date()),
    }
    res.status(200).json(instaSocial);
})
app.get("/api/v1/facebook",(req,res)=>{
    const facebookSocial={
        username:"saranya",
        followers:656,
        follows:785,
        date:format.asString("dd-MM-yy hh:mm:ss",new Date()),
    }
    res.status(200).json(facebookSocial)
})
app.get("/api/v1/linkedin",(req,res)=>{
    const linkedinSocial={
        username:"saranya",
        followers:56,
        follows:85,
        date:format.asString("dd-MM-yyyy hh:mm:ss",new Date()),
    }
    res.status(200).json(linkedinSocial)
})
app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({param:req.params.token})
})
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

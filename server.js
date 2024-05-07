const express=require("express")
const app=express()
const {client}=require("./pg")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("hello from backend")
})

async function getData(){
    const res=await client.query("select * from users;")
    // console.log(res)
    for(i=0;i<res.rows.length;i++){
        console.log(res.rows[i].name)
    }
    // console.log()
}

getData()

app.listen(3000,()=>{
    console.log("port connected")
})
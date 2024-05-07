const {Client}=require("pg")

const client=new Client({
    user:"postgres",
    host:"your_end_point",
    database:"testdb",
    password:"your_password",
    port:5432,
})

client.connect()
.then(()=>{console.log("connected to pg")})
.catch(()=>{
console.log("can't connect to pg")
})

module.exports={client}
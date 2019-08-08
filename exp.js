const express= require("express");
const app=express();

app.use(express.json());



////////// get ///////////////
app.get('/tasks',(req,res)=>{

    res.json(tasks) ;
 })


 /////////// Post /////////////
 app.post('/tasks',(req,res)=>{
let add=req.body;
tasks.push(add);

res.json(tasks);
 })

app.delete('/tasks/:id',(req,res)=>{
  let idd=parseInt(req.params.id) 
  console.log(idd) 
  tasks.map((elem,i)=>{
    if(elem.id==idd)
tasks.splice(i,1)
})
res.json(tasks);

})



const PORT=8000;

app.listen(PORT,()=>console.log(`Port ${PORT}` ))

const tasks=[
{
    id:1,
    name:"yasmin"

},

{
    id:2,
    name:"shahin"
},


]
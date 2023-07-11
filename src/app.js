const express =require("express");
const Student=require("./models/student")
require("../src/db/conn");

const app=express();

app.use(express.json());
//const port=process.env.PORT || 3000;

app.get("/123",(req,res)=>{
    //console.log(`<h1>"well come Nagaraj welcome back"</h1>`);
    //res.json({name:"Nagaraj"})
    res.send(`<h1>well come Nagaraj welcome back</h1>`);
    console.log("wellcome back");
})


app.get("/user",(req,res)=>{
    //console.log(`<h1>"well come Nagaraj welcome back"</h1>`);
    //res.json({name:"Nagaraj"})
    res.send(`<h1>well come user welcome back</h1>`);
    console.log("wellcome back");
})

//post method 

app.post("/students",(req,res)=>{
//console.log(req.body);
    const  user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((err)=>{
        res.status(400).send(err);
    })
   // res.send("hello from other side.")
})
// .listen(port ,()=>{
//     console.log(`server is running on ${port}`);
// });

// to read the data------------------------------------------

app.get("/students",async (req,res)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }catch(e){
     res.send(e);
    }
})



//find a perticular student-------------------------------------------------------------

app.get("/students/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        
        const studentData =await Student.findById(_id) ;

        if(!studentData){
             res.status(404).send({message:"Student not found"});
        }else{
            res.send(studentData);
        }
        
    }catch(e){
     res.status(500).send(e);
    }
})


//update student by id-------------------------------------------------------------
app.patch("/students/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        
        const updatestudentData =await Student.findByIdAndUpdate(_id,req.body,{
            new:true //return updated data instead of old one
        }) ;

        if(!updatestudentData){
             res.status(404).send({message:"Student not found"});
        }else{
            res.send(updatestudentData);
        }
        
    }catch(e){
     res.status(500).send(e);
    }
})

 // delete student data------------------------------------------------------------------------------------------

 app.delete("/students/:id",async (req,res)=>{  //async function
    try{
        const _id = req.params.id;
        
        const deletestudentData =await Student.findByIdAndDelete(_id) ;

        if(!deletestudentData){
             res.status(404).send({message:"Student not found"});
        }else{
            res.send(`i tem deleted successfully`);
        }
        
    }catch(e){
     res.status(500).send(e);
    }
})


app.listen(8000);
//npm run dev  ---- to run the project
const mongoose=require('mongoose');
const validator =require('validator');

const schema =mongoose.Schema;

const studentschema =new schema({
    name:{ type :String ,required :true ,minlength :3},
    email: {type: String, required: true, unique: [true,"Email already present"] ,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email");
        }}
    
        },
        phone:{
            type:Number,
            minLength:[10,'Phone number should be of 10 digits'],
            maxLength:[12],
            required:true,
            //unique:true
        },
        address:{
            type:String,
            required:true
        }
})

///create a new collection using model

const Student = mongoose.model('Student', studentschema);
module.exports =Student;


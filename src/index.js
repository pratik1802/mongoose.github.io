const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect('mongodb://127.0.0.1:27017/felix')


.then(() => console.log ('connected database'))
.catch((eg)=>{
    console.log(eg);
})


const studentsData=new mongoose.Schema({
    name:String,
    course:String,
    fees:Number,
})
  


const FelixStudents=new mongoose.model('fs',studentsData);
const student1=new FelixStudents({
    name:"std1",
    course:"full stack",
    fees:5000
})

try{
    student1.save();
}
catch(e){
    console.log(e)
}



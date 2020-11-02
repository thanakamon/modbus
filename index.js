const { Mongoose, MongooseDocument } = require('mongoose');
var mongoose=require('./config/mongoose');
var modbusModel=Mongoose.model('modbus');
var modbusRTU=require('./config/modbus');
mongoose();

setInterval(()=>{
    modbusRTU.readInputRegisters(1,2)
    .then((data)=>{
        console.log(data);
    }).catch((e)=>{
        console.log(e.message);
    })
},1000);

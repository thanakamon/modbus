const { Mongoose, MongooseDocument } = require('mongoose');
var mongoose=require('./config/mongoose');
var modbusRTU=require('./config/modbus');
var db=mongoose();
var modbusModel=db.model('modbus');

setInterval(()=>{
    modbusRTU.readInputRegisters(1,2)
    .then((data)=>{
        var allData=data.data;
        var model={
            temperature: allData[0]/10,
            humidity: allData[1]/10,
            datetime: Date.now()
        }
        modbusModel.insertMany(model,(err,docs)=>{
            if(err)console.log(err);
            else console.log(docs)
        });
    }).catch((e)=>{
        console.log(e.message);
    })
},1000);

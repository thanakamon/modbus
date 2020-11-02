var ModbusRTU=require('modbus-serial');
var client=new ModbusRTU();

client.connectRTU("/dev/ttyUSB0",{buadRate: 9600},callback);

module.exports=client;
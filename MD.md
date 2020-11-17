#modbus
##Basic
###Sensor : XY-MD02
![md](https://user-images.githubusercontent.com/42264167/99418096-3ab2de00-292d-11eb-8023-04067344b3d5.PNG)

โดยเราจะใช้ Command Register 0x04 ในการอ่าน input register ใช้ในการอ่านค่า Temperature และ Humindity  ซึ่งตำแหน่งของ Temperature จะเป็น 0x0001 และ ตำแหน่งของ Humidity จะเป็น 0x0002 
###Modbus serial
![](https://user-images.githubusercontent.com/42264167/99420533-e4936a00-292f-11eb-954a-1393efa89a32.PNG)

ซึ่งเราใช้ (FC=4) คือ Command Register 0x04 ที่ใช้ในการอ่าน input register ซึ่งจะรับ parameter address และ length ซึ่งระบุ address จาก 1 ไป 2 ที่มีค่า length เป็น 2 

##step 1 
เชื่อมต่อ Sensoe XY-MD02 เข้าสู่ Rasberry Pi ผ่าน RS485 Module ดังภาพ 
![](https://raw.githubusercontent.com/gingkasina/ModbusRTU/master/image/xy.jpeg)
เครดิตภาพ https://www.joom.com/th/products/5ca498ce28fc7101019f3549

![](https://user-images.githubusercontent.com/42264167/99426443-a8afd300-2936-11eb-8040-bbcddc504143.jpg)

##step2





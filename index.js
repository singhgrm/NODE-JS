//here we will learn how to create synchronous file 

//the best thing of nodejs we can create file, FileSystem
const fs=require("fs");
const { fileURLToPath } = require("url");
//asynchoronus means priority based synchronods means first come first serve
fs.writeFileSync("read.txt","welcome  to learn node js");
//it will override the data on fs.read.txt
fs.writeFileSync("read.txt","welcome  singh grm, to learn node js");
//we can add some extra information in same file using append..
fs.appendFileSync("read.txt" ," hey there whatbare you learning..now..");
//nodejs have additional data types buffer..
//buffer is used to store binary data..
const bff_data=fs.readFileSync("read.txt");
//console.log(bff_data);
//bff_data.toString(); it will give original data instead of buffer
org_data=bff_data.toString();
console.log(org_data);
//we can rename the file..name
fs.renameSync("read.txt","read_write.txt");


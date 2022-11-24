//here we are going to create file using asynchronous methos..
//it work simultanisily..as cpu work..but at one time work on only one file
const fs=require('fs');
fs.writeFile("read.txt",'hii..grm ,hope u are doing well...',(err)=>{
    console.log("now completed");
//id there is aeeroe in file it will show that error..if no error it will print null
    console.log(err);
});
//err argument is used to check error
fs.appendFile('read.txt',"   adding some extra information..",(err)=>
{
    //it can be blank or we can print anything..
});

//now read the data
fs.readFile('read.txt','UTF-8',(err,data)=>
{
    
console.log(data);
});



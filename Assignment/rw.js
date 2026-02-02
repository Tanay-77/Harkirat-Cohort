const fs = require("fs")

function read(err,data){
    console.log(data)
}

fs.read("a.txt","utf-8",read)

// for write 

const data = "hello world"

fs.write("a.txt",data,"utf",()=>{
    console.log ("file is updated")
})
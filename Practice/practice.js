const fs = reqire('fs')

let read = fs.readFileSync('tanay.t')

// functiion as an argument for another function

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function argu(a,b,op){
   return op(a,b)
}

argu(1,2,sum)


function tan(a,b,op){
   return op(a,b)
}

tan(1,2,sum)


function print(err,data){
  console.log(data)}


fs.readFile("t.txt","utf8",print)

// read file 

function prin(err , data){
  console.log(data)
}

fs.readFile("t.txt","utf",prin)


console.log("hi everyone ")

function tan(){
  console.log("tanay")
}

setTimeout(tan,1000)

let c =0 
for(let i = 0 ;  i<10 ; i++){
  c += i 
}

console.log(c)

//  promisified  syntax

setTimeoutpromisified(3000).then(callback)


function setTimeoutpromisified(resolve){
     setTimeout(resolve,3000)
}

function main(){
  console.log("hello")
}

setTimeoutpromisified(main)

// simple promisified version on settimeout 

function random(resolve){
  setTimeout(resolve,3000)
}

let p = new Promise(random)

function callback(){
  console.log("tanay")
}
p.then(callback)

function fun(resolve){
      resolve()
}

let pp = new Promise(fun)

function console(){
  console.log("uday")
}

pp.then(callback)

// simple fs. read file using promisified

let fs = require("fs")

function readfile(final){
  fs.readFile("a.txt","utf",(err,data)=>{
              final(data)
  })

}

function read(){
    return new promise(readfile)
}

const pa = read()

function callback(content){
  console.log(content)
}

pa.then(callback)


// own promised call

class Promise2{
  constructor(fn){
    this.fn=fn
    this.fn(()=>{
      this.resolve()
    
  })
  
  }
  then(callback){
    this.resolve = callback
  }
}

function readTheFile(resolve){
  setTimeout(()=>{
    console.log("calllback based")
    resolve()
  },3000)
}

function setTimeoutpromisified(){
  return new Promise2(readTheFile)
}

let paa = setTimeoutpromisified()

function callback(){
  console.log("callback has been called")
}

paa.then(callback)
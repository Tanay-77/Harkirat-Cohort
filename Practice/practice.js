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

function tan(err , data){
  console.log(data)
}

fs.readFile()
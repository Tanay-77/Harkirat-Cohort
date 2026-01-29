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
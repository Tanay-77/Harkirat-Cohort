let array = [1,2,3,4,5,6,7]

function even(){
    for(let i = 0 ; i<array.length ; i++){
        if(array[i] % 2 === 0){
            console.log(`${array[i]} is even `)
        }else{
            console.log(`${array[i]} is odd `)
        }
    }
}

even() 

// filter 

let arraynew = [1,2,3,4,5,6,7]

let even = arraynew.filter(num =>  num % 2 === 0)
let odd = arraynew.filter(num =>  num % 2 !== 0)


console.log("Even:", even)
console.log("Odd:", odd)

// sum of n number

function sum(n){
    let ans = 0
    for(let i = 0 ; i<n.length ; i++){
       ans += i
    }
  return ans 
}

sum(10)

function sum (n){
    let ans = 0
    for(let i = 0 ; i <n.length ; i++){
        ans+= i
    }
    return ans
}

sum(10)
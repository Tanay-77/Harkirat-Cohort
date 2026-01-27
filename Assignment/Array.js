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
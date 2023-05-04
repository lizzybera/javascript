// let b = {name: 'blessing', score: 33}

// let e = [];

// e.push(b.name)
// console.log(e)




// MAIN CODE

let a = Math.floor(Math.random()*50)
// console.log(a)
let arr =[]

let scores = []

let one = []
let three = []

if(a <= 15){
    console.log("we need more than 15 rates")
}else{
    for(let i = 1; i<=a; i++){
        // console.log(i)
        let c ={name : "lizzy", score: Math.floor(Math.random()*5)}
        arr.push(c)
        if(c.score===1){
            one.push(c.score)
        }else{
            three.push(c.score)
        }
        scores.push(c.score)
        // console.log(c.push())
    }
    // console.log(arr)
   
}

// let k = []
console.log(scores)

let total = scores.reduce((a,b)=>{
    return a + b;
}, 0)

console.log(total)

let pple1 = one.length;

console.log(pple1)

// console.log(scores[0])

// let two = scores.map((el)=>{
//     k.push(el === 2)
// })

// console.log(k)










// try out code

// let bc = [{name: "liz", score: 4}, {name: "lizzy", score: 2}, 
// {name: "eliza", score: 2}]


// let q = []
// console.log(bc.map((el)=> {
//     let k = el.score;
//     console.log(typeof(k))
//     // console.log(k.reduce((a,b)=>{
//     //     return a+b
//     // }))
// }))


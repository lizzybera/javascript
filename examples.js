let a = Math.floor(Math.random()*50)

let arr = []
let rating =[]

let one = []
let two = []
let three =[]
let four = []
let five = []
let zero = []

if(a <= 15){
    console.log("please we need more than 15 ratings")
}else{
    for(let i = 1; i< a; i++){
        let c = {name: "lizzy", score: Math.floor(Math.random()*6)}
        arr.push(c)

        if(c.score === 1){
            one.push(c.score)
        }else if(c.score === 2){
            two.push(c.score)
        }else if(c.score === 3){
            three.push(c.score)
        }else if(c.score ===4){
            four.push(c.score)
        }else if(c.score ===5){
            five.push(c.score)
        }else{
            zero.push(c.score)
        }

        rating.push(c.score)
    }
}

console.log(rating)

let total = rating.reduce((a,b)=>{
    return a + b;
}, 0)

console.log(total, "is the total number of ratings")

// no of people that rated

let pple1 = one.length;
let pple2 = two.length;
let pple3 = three.length;
let pple4 = four.length;
let pple5 = five.length;

console.log(pple1, "people rated 1")
console.log(pple2 , "people rated 2")
console.log(pple3, "people rated 3")
console.log(pple4, "people rated 4")
console.log(pple5, "people rated 5")

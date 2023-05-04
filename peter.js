// BMI calculator
// let BMI = height/(weight*weight)



class BMICalc{
    constructor (weight, height){
        this.weight = weight;
        this.height = height;
    }



    bmiFunc() {
        let calc = Math.floor(this.weight /(this.height*this.height))
        if(calc < 18.5){
            return(`your BMI is ${calc} and you are underweight`)
        }else if(calc >= 18.5 && calc < 25){
            return(`your BMI is ${calc} and you are normal`)
        }else if(calc >= 25 && calc < 30){
            return(`your BMI is ${calc} and you are overweight`)
        }else{
            return(`your BMI is ${calc} and you are obese`)
        }
    }

}

let lizzy = new BMICalc(33,1.22)

console.log(lizzy.bmiFunc())
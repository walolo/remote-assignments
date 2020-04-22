// Assignment1
const numbers = [1,2,3,4,5];
function max(numbers) {
    let hightest = numbers[0];    
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i]>=hightest) {
            hightest = numbers[i];
        }
    }
    return hightest;
}

// Assignment2
function calculate(args) {
let result;
if(args.op === "+") {
result = args.n1+args.n2;
}else if(args.op === "-") {
result = args.n1-args.n2;
}else{
result="Not supported";
}
return result;
} // way1: by JSON literal: calculate ({op:"+", n1:3, n2:4}); 

class Args {
    constructor(op,n1,n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
    calculate(op,n1,n2) {
        let result;
        if(this.op === "+"){
        result = this.n1+this.n2;
        }else if(this.op === "-"){
        result = this.n1-this.n2;
        }else{
        result="Not supported";
        }
        return result;
        }
}
let way_2 = new Args ("+",3,4); // way2: call function : way_2.calculate();

// Assignment3
function avg(data){
    let sum = 0;
    for(let i = 0; i < data.size; i++) {
    sum+= data.products[i].price;
    }
    return sum / data.size;
}

// Assignment5
function twoSum(nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

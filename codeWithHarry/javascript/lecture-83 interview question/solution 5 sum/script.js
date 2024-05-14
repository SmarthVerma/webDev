// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum_until(nums=[]){
    let n= nums.length;
    let sum=0;
        for(let i=0; i<n; i++){
            
            if(nums[i]>=0){
                sum+=nums[i];
            }else{
                break;
            }
        }
        console.log(sum);
        return sum
}

let arr=[5,6,74,89,1,2,-7,100];
sum_until(arr)
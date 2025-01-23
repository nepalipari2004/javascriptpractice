// function sum()
// {
//     const argsArr = [...arguments]

//     return argsArr.reduce((totalVal, currVal) => 
//         {
//         return totalVal + currVal
//     })
// }


// console.log(sum(4,5,6,7));


// function sum(...nums)
// {
//     return nums.reduce((total, currVal) => {
//         return total + currVal
// })
// }

// console.log(sum(1,2,3,4));


const myName = function fullName(first, last, ...titles){
    console.log('first', first)
    console.log('last', last)
    console.log('titles', titles)
}

console.log(myName('Richa', 'Basnet', 'Patel', 'III', 'LOVE'));

const multiply = (...nums) => (
    nums.reduce((accumulate, currentVal) => accumulate * currentVal)
);


console.log(multiply(9,8,7));

TEST
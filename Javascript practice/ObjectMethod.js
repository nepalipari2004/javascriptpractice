

// // // // // const getStats = (arr) => {
// // // // //     const max = Math.max(...arr);
// // // // //     const min = Math.min(...arr);
// // // // //     const sum = arr.reduce((sum,r) => sum + r );
// // // // //     const avg = sum / arr.length;

// // // // //     return{
// // // // //         max, min, sum, avg
// // // // //     }
// // // // // }

// // // // // const reviews = [4.5,5.0,3.44, 2.8, 3.5, 4.0, 3.5];
// // // // // const stats = getStats(reviews);


// // // // // console.log(stats);


// // // // const math = {
// // // //     numbers : [ 1,2,3,4,5],
// // // //     add : function (x,y) {
// // // //         return x + y;
// // // //     },
// // // //     multiply: function(x,y)
// // // //     {
// // // //         return x*y;
// // // //     },
// // // // }

// // // // console.log(math.add(2,3));


// // // // const auth = {

// // // // }


// // // const auth = {
// // //     username: 'TommyBot',
// // //     login() {console.log("logged in!")},
// // //     logout() {console.log("logged out")}
// // // }

// // // console.log(auth);


// // //intro to this key word:


// // const hi = function sayHi() {
// //     console.log("Hi");
// //     console.log(this);
// // }

// const person = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         const { first, last, nickName } = this;
//         return `${first} ${last} AKA ${nickName}`
//     },
//     printBio()
//     {
// console.log(this);
// const fullName = this.fullName();
// console.log(`${fullName} is a singer!`)
//     },
//     }
// };


// const printBio = person.printBio;



const annoyer = {
    phrases: ["literally", "OMG", "lol", "ROFL", "Tots!"]
}

pickPhrase() {
    const {phrases} = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
},
start() {
    this.timerID = setInterval (() => {
        console.log(this.pickPhrase())}
, 3000)
},
stop() {
    clearInterval(this.timerID);
    console.log("PHEW THAT IS OVER!")
}
}
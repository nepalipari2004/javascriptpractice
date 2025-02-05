// // const moveX = (element, amount, delay) => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const bodyBoundary = document.body.clientWidth;
// //       const elRight = element.getBoundingClientRect().right;
// //       const currLeft = element.getBoundingClientRect().left;
// //       if (elRight + amount > bodyBoundary) {
// //         reject({bodyBoundary, elRight, amount});
// //       } else {
// //         element.style.transform = `translateX(${currLeft + amount}px)`;
// //         resolve();
// //       }
// //     }, delay);
// //   });
// // };

// // const btn = document.querySelector('button');
// // async function animateRight(el,amt){
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// //   await moveX(el, amt, 1000);
// // }
// // animateRight(btn, 100).catch((err) => {
// //   console.log('ALL DONE');
// //   animateRight(btn, -100);
// // });


// // // moveX(btn, 300, 1000)
// // // .then(() => moveX(btn, 300,1000))
// // // .then(() => moveX(btn, 300,1000))
// // // .then(() => moveX(btn, 300,1000))
// // // .then(() => moveX(btn, 300,1000))
// // // .then(() => moveX(btn, 300,1000))
// // // .catch(({bodyBoundary,amount, elRight}) => {
// // //     console.log(`Body is ${bodyBoundary}px wide`);
// // //     console.log(`Element is at ${elRight}px, ${amount}px ;is too large`);
// // // })



// // animateRight(btn).catch(err =>
// // {
// //   console.log("All Done!");
// // }
// // // 


// // async function get3Pokemon(){
// //   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
// //   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
// //   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
// //   console.log(prom1);
// //   const poke1 = await prom1;
// //   const poke2 = await prom2;
// //   const poke3 = await prom3;
// //   console.log(prom1);
// //   console.log(poke1.data);
// //   console.log(poke2.data);
// //   console.log(poke3.data);
// // }

// // get3Pokemon();




// // function changeBodyColor(color, delay) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       document.body.style.backgroundColor = color;
// //       resolve();
// //     }, delay);
// //   })
// // }

// // async function lightShow(){
// // await changeBodyColor('yellow', 1000);
// // await changeBodyColor('pink', 1000);
// // await changeBodyColor('indigo', 1000);
// // await changeBodyColor('blue', 1000);
// // await changeBodyColor('violet', 1000);
// // }

// // lightShow();



// function printPokemon(results) {
//   for (let pokemon of results) {
//     console.log(pokemon.data.name);
//   }
// }

// get3pokemon();


//Parallel Requests

async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemon(results);
}

function printPokemon(results) {
  for(let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

get3Pokemon();
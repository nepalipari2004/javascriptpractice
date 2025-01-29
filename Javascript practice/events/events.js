// const colors = ['red', 'yellow', 'green', 'blue', 'violet', 'indigo', 'orange'];

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseover', function(){
//     console.log(this.innerText);
// });



// const changeColor = function(evt){
//     console.log(evt);
//     const h1 = document.querySelector('h1');
//     h1.style.color = this.style.backgroundColor;
// };  
    
// const container = document.querySelector('#boxes');

// for (let color of colors) {
//   const box = document.createElement('div');
//   box.style.backgroundColor = color;
//   box.classList.add('box'); 
//   container.appendChild(box);
//   box.addEventListener('click', changeColor);
//   }


  
// document.body.addEventListener('keypress', function(e)
// {
//     console.log(e);
// });


// const input = document.querySelector('#username');

// input.addEventListener('keydown', function(e){
//     console.log('KEY DOWN');
// });

// input.addEventListener('keyup', function(e){
//     console.log('KEY UP');
// });

// input.addEventListener('keypress', function(e){
//     console.log('KEY PRESS');
// });


const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        
        this.value = '';
    }
});


  


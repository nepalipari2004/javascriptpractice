// function isTouching(a, b) {
//     const aRect = a.getBoundingClientRect();
//     const bRect = b.getBoundingClientRect();
//     return !(
//       aRect.top + aRect.height < bRect.top ||
//       aRect.top > bRect.top + bRect.height ||
//       aRect.left + aRect.width < bRect.left ||
//       aRect.left > bRect.left + bRect.width
//     );
//   }


//  const avatar = document.querySelector('#player');
//  const coin = document.querySelector('#coin');

// window.addEventListener('keyup', function(e){
//     if(e.key === 'ArrowDown' || e.key === 'Down') {
//     const currTop = extractPos(avatar.style.top);
//     avatar.style.top = `${currTop + 50}px`;
// } else if (e.key === 'ArrowUp' || e.key === 'Up'){
//     const currTop = extractPos(avatar.style.top);
//     avatar.style.top = `${currTop - 50}px`;  
// } else if (e.key === 'ArrowRight' || e.key === 'Right'){
//     const currLeft = extractPos(avatar.style.left);
//     avatar.style.left = `${currLeft + 50}px`; 
//     avatar.style.transform = 'scale(1,1)'
 
// } else if (e.key === 'ArrowLeft' || e.key === 'Left'){
//     const currLeft = extractPos(avatar.style.left);
//     avatar.style.left = `${currLeft - 50}px`;  
//     avatar.style.transform = 'scale(-1,1)'
// }

// if (isTouching(avatar,coin)) moveCoin()

// });


// const extractPos = (pos) => {
//    if (!pos) return 100;
//    return parseInt(pos.slice(0,-2)); 
// };

// const moveCoin = () => {
//     const x = Math.floor(Math.random() * window.innerWidth);
//     const y = Math.floor(Math.random() * window.innerHeight);
//     coin.style.top = `${y}px`;
//     coin.style.left=`${x}px`;
// };




const creditCardInput = document.querySelector('#cc');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
const formData = {};


for (let input of [creditCardInput, termsCheckBox, veggieSelect]){
    input.addEventListener('input', ({target})=> {
    const {name, type, value, checked} = target;        
        formData[name] = type === 'checkbox'? checked: value;
        console.log(formData);

    });
    
}


// creditCardInput.addEventListener('input', (e) => {
//     console.log('CC CHANGED!', e);
//     formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//     console.log('VEGGIES CHANGED!', e);
//     formData['veggie'] = e.target.value;
// });


// termsCheckBox.addEventListener('input', (e) => {
//     console.log('CHECKED!', e);
//     formData['agreeToterms'] = e.target.checked;
// });
const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject();
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve(() => moveX(element, amount * 2, delay)); // Chain another move
      }
    }, delay);
  });
};


moveX(btn, 300, 1000).then(() => {
    console.log("DONE MOVING!");
    
});
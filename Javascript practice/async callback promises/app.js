const btn = document.querySelector('button');
setTimeout(() => {
    btn.style.transform = `translateX(100px)`; 
setTimeout(() => {btn.style.transform = `translateX(200px)`;}, 2000);
}, 1000);


const moveX = (element, amount, delay, onSucess, onFailure) =>{
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
const currLeft = element.getBoundingClientRect().left;

if (elRight + amount > bodyBoundary){
    onFailure();
    console.log('done - cant go any further');
}
else {
    setTimeout(() => {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        onSucess();
        if (callback) callback();
    }, delay);
}
};

moveX(btn, 100, 1000, () => {
    moveX(btn, 400, 1000, () => {
        moveX(btn,700,1000,() => {
            console.log('REALLY, WE STILL HAVE SCREEN LEFT?');
        }, 
    () => {alert ('CAN NOT MOVE FURTHER')};
    }
);
() => {
    alert('can not move further');
};
},
() => {
    alert('can not move further');
}
}
);

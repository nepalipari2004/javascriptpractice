const allLIs = document.querySelectorAll('li');

for (let i = 0; i < allLIs.length; i++)
{
    allLIs[i].innerText = 'WE THE CHAMPS!'
}

for (let li of allLIs)
{
    li.innerHTML = "WE ARE <u>  THE CHAMPS! </u>"
}

const alllis = document.querySelectorAll('li');
const colors = ['red', 'orange','green','blue', 'purple'];

allLIs.forEach((li, i) => {
    const color = colors[i];
    console.log(el, color);
    li.style.color = color;
});
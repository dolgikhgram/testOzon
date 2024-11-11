const circle = document.getElementById('circle')
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress (percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset=offset
    console.log(offset)
}

const textInput = document.getElementById('input')


textInput.onchange=((e)=>{
    console.log(e.target.value)
    setProgress(e.target.value)
})

const hideSelector = document.getElementById('hide')

hideSelector.onchange=((e)=>{
    circle.style.opacity=e.target.checked?0:1
})

const animateSelector = document.getElementById('animate')

animateSelector.onchange=((e)=>{
    e.target.checked?circle.classList.add('animated'):circle.classList.remove('animated')
})

setProgress(50)
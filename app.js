let number = document.getElementById('number')
let counter = 0
let progress = 0
let textValue = document.getElementById('value')
textValue.addEventListener('input',()=>{
let textValue = document.getElementById('value')
    progress=textValue.value
    counter=0
    setInterval (()=>{
        if (counter == progress){
            clearInterval
        } else {
            counter+=1
            number.innerHTML = `${counter}%`
        }
    },81)
})

const canvas = document.querySelector('canvas');
const value = document.getElementById('value')

const getRadians=(degree)=>{ // функция для перевода градусов в радианы
	return Math.PI / 180 * degree;
}

const getEndAngle = (value)=>{
    return (4.712)
}
const ctx = canvas.getContext('2d');
let xc = canvas.width / 2
let	yc = canvas.height / 2
ctx.beginPath();
ctx.arc(xc, yc, 80, 4.712,2.832)// arc(x, y, radius, startAngle, endAngle, anticlockwise)
// Рисуем дугу с центром в точке (x,y) радиусом radius, начиная с угла startAngle и заканчивая в endAngle в направлении против часовой стрелки anticlockwise (по умолчанию по ходу движения часовой стрелки).
ctx.strokeStyle = "#1CB3FE"
ctx.lineWidth = 10;
ctx.stroke() // рисует фигуру с внешеней обводкой
// ctx.clearRect(0, 0, 320, 234); метод которая стирает canvas

value.addEventListener('input',()=>{
    let textValue = document.getElementById('value')
        progress=textValue.value
        console.log(progress)
        const ctx = canvas.getContext('2d');
        let xc = canvas.width / 2
        let	yc = canvas.height / 2
        ctx.beginPath();
        ctx.arc(xc, yc, 80, 4.71238898038469, getEndAngle(progress))// arc(x, y, radius, startAngle, endAngle, anticlockwise)
        // Рисуем дугу с центром в точке (x,y) радиусом radius, начиная с угла startAngle и заканчивая в endAngle в направлении против часовой стрелки anticlockwise (по умолчанию по ходу движения часовой стрелки).
        ctx.strokeStyle = "#1CB3FE"
        ctx.lineWidth = 10;
        ctx.stroke() // рисует фигуру с внешеней обводкой
        // ctx.clearRect(0, 0, 320, 234); метод которая стирает canvas
})

console.log(getRadians(270),getRadians(135))
console.log(getEndAngle(0))
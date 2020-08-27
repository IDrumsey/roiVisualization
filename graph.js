//global Constants
const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth * .9;
canvas.height = innerHeight * .8;

let canvasCenterX = canvas.width / 2;
let canvasCenterY = canvas.height / 2;

//Event Listeners
window.addEventListener('resize', dimensionChange);


//Functions
function drawCircle(x, y, radius){
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}

function dimensionChange(){
    console.log("...")
    canvas.width = innerWidth * .9;
    canvas.height = innerHeight * .8;

    let canvasCenterX = canvas.width / 2;
    let canvasCenterY = canvas.height / 2;

    drawCircle(canvasCenterX, canvasCenterY, 2);
}

//Testing
drawCircle(canvasCenterX, canvasCenterY, 2);
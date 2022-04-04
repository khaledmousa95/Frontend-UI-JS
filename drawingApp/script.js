const canvas =document.getElementById('board');
const ctx = canvas.getContext('2d');
const colorInput = document.getElementById('color')
let size = 5
let color = 'black'
isPressed = false   
let x
let y
// let theColor
// theInput.addEventListener("input", function(){
//     var theColor = theInput.value;
    
//     // Do something with `theColor` here.
//   }, false);
canvas.addEventListener('mousedown', (e)=>{
    isPressed = true
    x = e.offsetX
    y = e.offsetY
   


})
canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){ 
  const  x2 = e.offsetX
    const y2 = e.offsetY   
drawCircle(x2,y2)
drawLine(x,y,x2,y2)
x= x2
y = x2

}
   


})
function drawCircle(x, y){
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2)
ctx.fillStyle = color
ctx.fill()
}



function drawLine(x1 ,y1 ,x2 ,y2){
ctx.beginPath()
ctx.moveTo(x1, y1)
ctx.lineTo(x2,y2)
ctx.strokeStyle = color
ctx.lineWidth = size  
ctx.stroke()
}

// siapkan kanvas
const mycanvas = document.querySelector('#mycanvas');

// ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// tentukan context
const c = mycanvas.getContext('2d');

// manipulasi canvas

// membuat retangle
// c.fillStyle = 'blue';
// c.strokeStyle = '#999';
// c.lineWidth = '5';

// c.rect(50, 50, 300, 300);
// c.fill();
// c.stroke();



// // membuat segitiga
// c. fillStyle = 'red';
// c. beginPath();
// c. moveTo(900, 50);
// c. lineTo(1050, 350) ;
// c. lineTo(750, 350) ;
// c. closePath();
// c. fill();
// c. stroke();
const img = new Image();
img.src = "img/canvas1.png";
 
img.onload = function(){
let x = 300;
let y = 200;
let speedx = 7;
let speedy = 7;
let radius = 100;
// membuat lingkaran
function draw(){
window. requestAnimationFrame(draw);
c. clearRect(0,0,innerWidth, innerHeight);

c. drawImage(img, x - radius, y - radius, radius * 2, radius * 2);
c. fillStyle= 'transparent';
c. beginPath();
c. arc(x,y,radius,0,2*Math.PI);
c. fill();

if(x + radius >innerWidth || x - radius < 0){
    speedx = -speedx;

} 
if(y + radius >innerHeight || y - radius < 0){
    speedy = -speedy;

} 

x+= speedx;
y+= speedy;
}

draw();
};
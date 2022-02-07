var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(75,75, 70, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'black';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(75, 75, 70, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath()

ctx.beginPath();
ctx.arc(90,75, 30, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(100,65, 7, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();

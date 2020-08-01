var c = wx.createCanvas();
var ctx = c.getContext('2d');

var ball={
  x:10,
  y:10,
  vx:-50/60,
  vy:-50/30,
  direction:1,
  radius:50,
  color:'#1E90FF',
  draw:function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function animate_it(){
  ctx.save();
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0,0,c.width,c.height);
  
  ctx.fillStyle = "#00BFFF"
  ctx.textAlign = "center" 
  ctx.textBaseline = "middle" 
  ctx.font = "32px Arial"
  ctx.fillText("Seacolorfox", c.width / 2, (c.height - 20));
  ctx.strokeStyle = "#000";
  ctx.strokeText("Hello mini Program!", c.width / 2, (c.height - 75))

  ctx.restore();

  ball.draw();
  
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.x <= 0 ){
    ball.x = 0;
    ball.vx = - ball.vx;
  }

  if ( ball.y <= 0 ) {
    ball.y = 0;
    ball.vy =  - ball.vy;
  }

  if ( ball.x > c.width  ){
    ball.x = c.width;
    ball.vx = -ball.vx;
  }

  if ( ball.y > c.height ){
    ball.y = c.height;
    ball.vy = - ball.vy;
  }

  requestAnimationFrame(animate_it);
}
requestAnimationFrame(animate_it);
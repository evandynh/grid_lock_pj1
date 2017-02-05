$ ( document ).ready(function(){
  console.log('connected');


  var canvas = document.getElementById('myCanvas')
  var ctx = canvas.getContext('2d')
  var raf

  var boundary = {
    draw: function() {
      ctx.beginPath()
      ctx.moveTo(0,0)
      ctx.lineTo(500,0)
      ctx.lineTo(500,163)
      ctx.moveTo(500,247)
      ctx.lineTo(500,500)
      ctx.lineTo(0,500)
      ctx.lineTo(0,0)
      ctx.lineCap = 'round'
      ctx.stroke()
    }
  }


  var block1 = new Block(1,1,'green',164,80)
  var block2 = new Block(1,83,'purple',80,247)
  var block3 = new Block(1,330,'orange',80,164)
  var block4 = new Block(414,1,'pink',80,247)
  var block5 = new Block(83,164,'crimson',164,80)
  var block6 = new Block(247,80,'blue',80,247)
  var block7 = new Block(330,330, 'darkgray',164,80)
  var block8 = new Block(164,414,'yellow',247,80)

  boundary.draw()
  block1.draw()
  block2.draw()
  block3.draw()
  block4.draw()
  block5.draw()
  block6.draw()
  block7.draw()
  block8.draw()

  function Block(x, y, color, width, height) {
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    // this.draggable = false
    this.draw = function(){
      ctx.lineWidth = 2
      ctx.strokeStyle = 'black'
      ctx.fillStyle = color
      ctx.strokeRect(this.x, this.y, this.width, this.height)
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    boundary.draw()
    block1.draw()
    block2.draw()
    block3.draw()
    block4.draw()
    block5.draw()
    block6.draw()
    block7.draw()
    block8.draw()
    raf = window.requestAnimationFrame(init);
  }

  $('#startGame').click(function(e) {
    raf = window.requestAnimationFrame(init);
  });

  $('canvas').mouseout(function(e) {
    window.cancelAnimationFrame(raf);
  });

  $('#reset').click(reset)

function update(){
  if (block5.x < 600) {
    block5.x++
  }
}
function init(){
    update()
    draw()
}
function reset(){
  draw()
}




























})

function preload() {
  myFont = loadFont('Contenderfreeversion-eZ596.otf')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  textFont(myFont)
  textAlign(CENTER)
  // put setup code here
}

let r = 0
let b = 0
let bx = 0.1
function draw() {
  // put drawing code here
  background(color('lightpink'))

  r += 1

  b += bx
  if (b > 50 || b < 0) {
    bx *= -1
  }
  // print(b)

  let locX = 300
  let locY = -150
  let locZ = 0

  ambientLight(0, 0, b)

  pointLight(250, 0, 0, locX, locY, locZ)
  pointLight(255, 0, 0, -locX, -locY, -locZ)

  pointLight(48, 25, 52, locX / 2, locY, locZ)
  pointLight(48, 25, 52, -locX, -locY / 2, -locZ)

  push()
  translate(locX, locY, locZ)
  sphere(10)
  pop()

  push()
  translate(-locX, -locY, -locZ)
  sphere(10)
  pop()

  push()
  translate(locX, locY / 2, locZ)
  sphere(10)
  pop()

  push()
  translate(-locX, -locY / 2, -locZ)
  sphere(10)
  pop()

  push()
  rectMode(CENTER)
  rotateY(radians(r))
  noFill()
  stroke(color('#0F52BA')) //sapphire blue
  rect(0, 0, 400, 500)
  pop()

  push()
  specularMaterial(255)
  shininess(250)
  rotateZ(radians(-20))
  rotateY(radians(-r / 2))
  box(300, 100, 5)
  pop()

  push()
  rotateZ(radians(-20))
  rotateX(radians(-r))
  noStroke()
  emissiveMaterial(color('#301934')) //dark purple
  cylinder(5, 400)
  pop()

  push()
  specularMaterial(255)
  shininess(255)
  rotateZ(radians(-20))
  rotateY(radians(r / 3))
  beginShape()
  vertex(0, -200, 0)
  vertex(100, 0, 0)
  vertex(-100, 0, 0)
  endShape(CLOSE)
  pop()

  push()
  emissiveMaterial(color('#FFBF00')) //amber
  rotateX(radians(r / 2))
  rotateY(radians(-r / 3))
  rotateZ(radians(20))
  beginShape()
  vertex(0, -300, 0)
  vertex(50, 0, 0)
  vertex(-50, 0, 0)
  endShape(CLOSE)
  pop()

  push()
  textSize(70)
  fill(color('#0F52BA'))
  translate(0, -300, 0)
  text('synthesize', 0, 0)
  pop()
}

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

let x = -100
let dx = 0.5
let r = 0
let colorArray = ['#FFBF00', '#8B0000', '#00008B']
function draw() {
  background(255)

  // boxes
  for (let i = 0; i < 3; i++) {
    let y = -200 + i * 200
    push()
    noFill()
    translate(0, y, 0)
    rotateY(radians(r * (1 + i)))
    strokeWeight(0.5)
    stroke(color(colorArray[i]))
    box(400, 190, 300)
    pop()
  }

  r += 0.05

  // pointLights

  for (let i = 0; i < 3; i++) {
    let y = -200 + i * 200
    let z = 0
    let col = color(colorArray[i])
    pointLight(col, x, y, z)

    push()
    translate(x, y, 0)
    noStroke()
    emissiveMaterial(col)
    sphere(7)
    pop()
  }
  x += dx
  if (x > 50 || x < -100) {
    dx *= -1
  }

  // planes
  for (let i = 0; i < 3; i++) {
    let y = -200 + i * 200
    push()
    translate(-100, y, 0)
    rotateY(radians(45))
    noStroke()
    specularMaterial(255)
    shininess(100)
    plane(180)
    pop()
  }

  // circles
  for (let i = 0; i < 3; i++) {
    let y = -200 + i * 200
    push()
    noStroke()
    specularMaterial(255)
    translate(-50, y, 0)
    rotateY(radians(-r * 5 * (1 + i)))
    circle(0, 0, 75)
    pop()
  }

  // spiral
  for (let i = 0; i < 180; i++) {
    let x = i / 2
    let y = -400 + i * 5

    push()
    translate(150, 0, 0)
    rotateY(radians(-i * 8 + r * 10))
    rotateZ(radians(180))
    colorMode(HSB, 1000)
    stroke(i * 5, 1000, 1000)
    line(-x, y, x, y)
    pop()
  }

  // diagonal
  for (let i = 0; i < 10; i++) {
    push()
    let a = i * 4
    rotateZ(radians(a))
    rotateY(radians(a))
    rotateX(radians(r * 10))
    strokeWeight(0.4)
    stroke(color('hotpink'))
    line(0, -600, 0, 600)
    pop()
  }
}

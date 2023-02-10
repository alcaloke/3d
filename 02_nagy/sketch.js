function preload() {
  img = loadImage('nagy-29.jpg')
}

let img
let r = 0

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
  background(255)

  push()
  texture(img)
  noStroke()
  plane(596, 750)
  pop()

  let locX = mouseX - width / 2
  let locY = mouseY - height / 2
  // print(locX + ' ' + locY)
  // print(mouseX + ' ' + mouseY)

  for (let i = 0; i < 5; i++) {
    let x = -250 + i * 85
    let y = -250 + i * 100
    let z = 0 + i * 100
    let l = 0 + i * 50
    let s = 5 + i * 10
    pointLight(255, l, l, x, y, z)
    push()
    noStroke()
    translate(x, y, z)
    sphere(s)
    pop()
  }

  push()
  stroke(color('pink'))
  line(101, 67, -297, -58)
  pop()

  push()
  rotateZ(radians(r))
  stroke(color('#0047AB'))
  line(-width / 2, -height / 2, width / 2, height / 2)
  pop()

  r += 0.1

  push()
  translate(80, -270, 70)
  rotateY(radians(-24))
  rotateZ(radians(-r * 10))
  rotateX(radians(5))
  noStroke()
  specularMaterial(255)
  shininess(255)
  box(100)
  pop()

  for (let i = 0; i < 30; i++) {
    let radius = 5 + i * 15
    let y = 0 + i * 5
    let h = 450 + 13 * i
    push()
    noFill()
    colorMode(HSB, 1000)
    stroke(h, 1000, 1000)
    translate(0, y, 200)
    rotateX(radians(r * 10))
    rotateY(radians(45))
    circle(0, 0, radius)
    pop()
  }
}

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

let r = 0
let c = 450
let dc = 5
function draw() {
  background(0)
  let cx = map(mouseX, 0, width, -width / 2, width / 2)
  camera(cx, 0, height / 2 / tan(PI / 6), 0, 0, 0, 0, 1, 0)
  // grid
  let n = 18
  let s = 30
  let b = 15
  let w = (n * s - b * 2) / 2

  let sz = 15

  // colors
  push()
  colorMode(HSB, 1000)
  c += dc
  sat = 800
  br = 400
  if (c > 900 || c < 450) {
    dc *= -1
  }
  let col = color(c, sat, br)
  let col2 = color(c - 600, sat, br)
  pop()

  // B. pointlight i

  let mz = map(mouseY, 0, height, 250, 0)

  let p1x = w * sin(radians(r))
  let p1y = -w * cos(radians(r))
  let p1z = mz

  pointLight(col, p1x, p1y, p1z)

  // sphere i
  push()
  rotate(radians(r - 90))
  translate(w, 0, p1z)
  emissiveMaterial(col, 1000, 1000)
  noStroke()
  sphere(sz)
  pop()

  // C. pointLight ii
  let p2x = w * sin(radians(r + 180))
  let p2y = -w * cos(radians(r + 180))
  let p2z = mz

  pointLight(col2, p2x, p2y, p2z)

  // sphere ii
  push()
  rotate(radians(r - 90))
  translate(-w, 0, p2z)
  emissiveMaterial(col2, 1000, 1000)
  noStroke()
  sphere(sz)
  pop()

  // A. grid
  for (let i = 0; i < n; i++) {
    let x = -w + i * s
    let z = 0
    for (let j = 0; j < n; j++) {
      let y = -w + j * s
      push()
      translate(x, y, z)
      rotateY(radians((-r / 10) * j))
      rotateX(radians((-r / 10) * j))
      specularMaterial(255)
      shininess(25)
      noStroke()
      box(b)
      pop()
    }
  }

  // D. plane
  push()
  noStroke()
  specularMaterial(255)
  shininess(50)
  rotateZ(radians(r * 0.1))
  plane(w * 3)
  pop()

  // E. pinkBox
  push()
  noFill()
  strokeWeight(0.5)
  stroke(color('hotpink'))
  let dp = map(mouseY, 0, height, 50, 250)
  translate(0, 0, dp)
  rotateY(radians(-r * 0.5))
  box(300)
  pop()

  r += 1
}

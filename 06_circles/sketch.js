function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

let r = 0
let p1ch = 195
let dp1c = 0.7
let d = 0
let dx
function draw() {
  background(0)

  n = 41
  s = 15
  c = 15
  w = (s * (n - 1)) / 2
  let dz = map(mouseY, height, 0, -10, 20)

  // C. Colors
  push()
  colorMode(HSB, 360)
  let p1c = color(p1ch, 360, 360)
  let p3c = color(p1ch + 100, 360, 360)
  p1ch += dp1c
  if (p1ch > 205 || p1ch < 195) {
    dp1c *= -1
  }
  pop()

  // B. Lights
  // light 1
  pointLight(p1c, 0, 0, dz)

  // light 2
  let p2x = (w / 2) * sin(radians(r))
  let p2y = (w / 2) * cos(radians(r))
  pointLight(255, 255, 255, p2x, p2y, dz)
  push()
  rotateZ(radians(-r))
  translate(0, w / 2, 0)
  noStroke()
  sphere(25)
  pop()

  // light 3
  let p3x = (w / 2) * sin(radians(r - 180))
  let p3y = (w / 2) * cos(radians(r - 180))
  pointLight(p3c, p3x, p3y, dz)
  push()
  rotateZ(radians(-r + 180))
  translate(0, w / 2, 0)
  noStroke()
  sphere(25)
  pop()

  // D. plane
  push()
  translate(0, 0, -10)
  rotateZ(radians(90))
  noStroke()
  plane(w * 3)
  pop()

  // A. Circles
  for (let i = 0; i < n / 2; i++) {
    let x = -w / 2 + i * s
    for (let j = 0; j < n; j++) {
      let y = -w + j * s
      let ra = 1 + (d * i) / (PI * j)
      push()
      translate(x, y, 0)
      rotateY(radians(ra + r))
      rotateX(radians(ra + r))
      noStroke()
      specularMaterial(255)
      shininess(50)
      circle(0, 0, c)
      pop()
    }
  }

  r += 1
  dx = map(mouseX, 0, width, -50, 50)
  d += dx
}

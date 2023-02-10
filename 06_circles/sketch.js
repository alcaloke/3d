function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

let r = 0
let p1ch = 500
let dp1c = 3
let d = 0

function draw() {
  background(0)

  n = 41
  s = 15
  c = 15
  w = (s * (n - 1)) / 2
  let dz = map(mouseY, height, 0, 25, 35)

  // C. Colors
  push()
  colorMode(HSB, 1000)
  let p1c = color(p1ch, 1000, 1000)
  let p3c = color(p1ch + 100, 1000, 1000)
  p1ch += dp1c
  if (p1ch > 700 || p1ch < 500) {
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
  rotateZ(radians(90))
  noStroke()
  plane(w * 3)
  pop()

  // A. Circles
  for (let i = 0; i < n; i++) {
    let x = -w + i * s
    for (let j = 0; j < n; j++) {
      let y = -w + j * s
      let ra = 1 + (d * i) / (PI * j)
      push()
      translate(x, y, 0)
      rotateY(radians(ra + r))
      rotateX(radians(ra + r))
      noStroke()
      specularMaterial(255)
      shininess(30)
      circle(0, 0, c)
      pop()
    }
  }

  r += 1
  d += 2
}

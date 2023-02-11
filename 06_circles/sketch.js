function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

let r = 0
let p3cho = 155
let p3ch = p3cho
let dp3c = 0.7
let d = 0
let dx

function draw() {
  background(0)

  n = 36
  s = 18
  c = 17
  w = (s * (n - 1)) / 2
  let dz = map(mouseY, height, 0, -10, 20)

  // C. Colors
  push()
  colorMode(HSB, 360)

  let p1c = color(245, 360, 360)

  let p3c = color(p3ch, 360, 360)
  p3ch += dp3c
  if (p3ch > 185 || p3ch < p3cho) {
    dp3c *= -1
  }
  pop()

  // B. Lights
  // light 1 - blue @ center
  pointLight(p1c, 0, 0, dz)

  // light 2 - white light in orbit
  let p2x = (w / 2) * sin(radians(r))
  let p2y = (w / 2) * cos(radians(r))
  pointLight(255, 255, 255, p2x, p2y, dz)
  push()
  translate(p2x, p2y, 0)
  noStroke()
  sphere(25)
  pop()

  // light 3 - fluctuating blue/green in orbit
  let p3x = (w / 2) * sin(radians(r - 180))
  let p3y = (w / 2) * cos(radians(r - 180))
  pointLight(p3c, p3x, p3y, dz)
  push()
  translate(p3x, p3y, 0)
  noStroke()
  sphere(25)
  pop()

  // spotLight [4] - blue light in 8 orbit
  let f = 0.05
  let p4x = f * sin(radians(-r * 2))
  let p4y = f * 5 * cos(radians(r))
  spotLight(0, 0, 255, 0, 0, 1000, p4x, p4y, -1)

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
      shininess(255)
      circle(0, 0, c)
      pop()
    }
  }

  r += 1
  dx = map(mouseX, 0, width, -50, 50)
  d += dx
}

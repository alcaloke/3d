let font

function preload() {
  font = loadFont('Glametrix-oj9A.otf')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  textFont(font)
  textSize(23)
  textAlign(CENTER, CENTER)
}

let r = 0
let p1ch = 180
let dp1c = 1

function draw() {
  background(0)
  n = 30
  s = 20
  c = 18
  w = (s * (n - 1)) / 2
  r += 1
  let depth = map(mouseY, height, 0, -30, 10)

  // C. Colors
  push()
  colorMode(HSB, 360)
  let p2c = color(p1ch, 360, 360)
  p1ch += dp1c
  if (p1ch > 225 || p1ch < 170) {
    dp1c *= -1
  }
  pop()

  // LIGHTS
  // pointLight 1 - white @ center
  pointLight(255, 255, 255, 0, 0, depth)

  // pointLight 2 - green blue purple orbiting
  let p2x = (w / 2) * sin(radians(r))
  let p2y = (w / 2) * cos(radians(r))
  pointLight(p2c, p2x, p2y, depth)
  push()
  translate(p2x, p2y, 0)
  noStroke()
  sphere(25)
  pop()

  // pointLight 3 - pink at top right
  // let locX = mouseX - width / 2
  // let locY = mouseY - height / 2
  let locX = w / 2
  let locY = -w / 2
  pointLight(218, 112, 214, locX, locY, depth)

  // PLANE
  push()
  translate(0, 0, -50)
  rotateZ(radians(90))
  noStroke()
  plane(w * 3)
  pop()

  // CIRCLES
  for (let i = 1; i < n / 2; i++) {
    let x = -w / 2 + s * i
    for (let j = 1; j < n; j++) {
      let y = -w + s * j
      // even & odd lines
      let a
      if (j % 2 === 0) {
        a = n * j - i * j
      } else {
        a = i * j
      }
      // faster rotation as j++
      let ryd = map(mouseX, 0, width, 20, 1)
      let ry = r * (j / ryd)
      let ra = a + ry

      push()
      translate(x, y, 0)
      rotateY(radians(ra))
      rotateX(radians(ra * 1.5))
      noStroke()
      specularMaterial(255)
      shininess(255)
      circle(0, 0, c)
      pop()

      push()
      translate(x, y, 0)
      fill(0)
      // text(ra, 0, 0)
      pop()
    }
  }
}

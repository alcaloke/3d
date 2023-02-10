function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

let ra = 0

let r = 0
let g = 0
let b = 0
let rx = 1

function draw() {
  background(0)

  // let cx = map(mouseX, 0, width, -width / 2, width / 2)
  // camera(cx, 0, height / 2 / tan(PI / 6), 0, 0, 0, 0, 1, 0)

  let n = 33
  let s = 20
  let b = 11
  let w = (s * (n - 1)) / 2

  ra += 1

  // 0. Guides
  // push()
  // strokeWeight(0.5)
  // line(-width / 2, 0, width / 2, 0)
  // line(0, -height / 2, 0, height / 2)
  // pop()

  // C. Colours
  // C.1 pointLight 1 colour
  let p1c = color(r, g, b)
  r += rx * map(mouseY, 0, height, 180, 0)
  if (r > 30 || r < 0) {
    rx *= -1
  }

  // B. Lights
  let phase = 90
  let pz = map(mouseY, 0, height, 100, 0)
  // B.1 Light 1
  let sr = 25
  let p1x = w * sin(radians(ra))
  let p1y = w * cos(radians(ra))
  let p1z = pz
  pointLight(p1c, p1x, p1y, p1z)
  push()
  rotate(radians(-ra))
  translate(0, w, p1z)
  noStroke()
  sphere(sr)
  pop()

  // B.2 Light 2
  let p2x = w * sin(radians(ra - phase))
  let p2y = w * cos(radians(ra - phase))
  let p2z = pz * 2
  pointLight(172, 172, 172, p2x, p2y, p2z)
  push()
  rotate(radians(-ra + phase))
  translate(0, w, p2z)
  noStroke()
  sphere(sr)
  pop()

  // B.3 Light 3
  let p3x = w * sin(radians(-ra - phase))
  let p3y = w * cos(radians(-ra - phase))
  let p3z = pz * 3
  pointLight(0, 0, 159, p3x, p3y, p3z)
  push()
  rotate(radians(ra + phase))
  translate(0, w, p3z)
  noStroke()
  sphere(sr)
  pop()

  let aa = 1
  let az = map(mouseX, 0, width, 0, 1.7)
  let sh = map(mouseY, height, 0, 4, 20)
  // A. Grid
  for (let i = 0; i < n; i++) {
    let x = -w + i * s
    for (let j = 0; j < n; j++) {
      let y = -w + j * s
      let a = (aa + i) * (aa + j) * az + ra
      push()
      translate(x, y, 0)
      rotateZ(radians(a))
      rotateY(radians(a))
      noStroke()
      specularMaterial(255)
      shininess(sh)
      box(b)
      pop()
    }
  }

  //plane
  push()
  push()
  noStroke()
  specularMaterial(255)
  shininess(50)
  plane(w * 50)
  pop()
  pop()
}

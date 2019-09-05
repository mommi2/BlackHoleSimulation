var frameRate = 1 / 60;
var frameDelay = frameRate * 1000;

const c = 299792458; // m/s
const sM = 1.989e30; // kg
const G = 6.67408E-11;
var scale;
var factor;

var background = document.getElementById('background'),
    content = document.getElementById('content');

    background.width = innerWidth;
    background.height = innerHeight;
    content.width = innerWidth;
    content.height = innerHeight;

var ctxB = background.getContext("2d"),
    ctxC = content.getContext("2d");

var m87;
var p;
var photons = [];

function start() {
    m87 = new BlackHole(new Vector(background.width / 3, background.height / 2), sM * 2400e1);
    m87.show();
    m87.print();

    p = new Photon(new Vector(content.width - 50, content.height / 2 - m87.rs * scale * 2.6));
    console.log("TEMPORAL FACTOR = " + factor);
    setInterval(animatedLoop, frameDelay);
}

function animatedLoop() {
    if (Vector.sub(m87.pos, p.pos).mag > m87.rs * scale) {
        p.updateSpeed(m87);
        p.update();
        p.print();
        p.show();
    }
}

start();
var frameRate = 1 / 60;
var frameDelay = frameRate * 1000;

const c = 299792458; // m/s
const sM = 1.989e30; // kg
const G = 6.67408E-11;
var scale;  //DIVIDENDO SI AUMENTA DI DIMENSIONE
var factor; //MOLTIPLICANDO SI AUMENTA LA VELOCITA'

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
    m87 = new BlackHole(new Vector(background.width / 3, background.height / 2), sM * 2400e9);
    m87.show();
    m87.print();

    p = new Photon(new Vector(content.width - 50, innerHeight / 2 - m87.sr * scale * 1.3));
    p.print();
    console.log("TEMPORAL FACTOR = " + factor);
    console.log("SCALE = " + scale);
    let start = 0;
    let end = content.height / 2;
    /**for (let i = start; i < end; i + 50) {
        photons.push(new Photon(new Vector(content.width - 50, i)))
    }**/
    setInterval(animatedLoop, frameDelay / factor);
}

function animatedLoop() {
    //if ((Vector.sub(m87.pos, p.pos).mag > m87.sr) && p.pos.x > 0){
        p.updateSpeed(m87);
        p.update();
        p.print();
        p.show();
    //}
}

start();
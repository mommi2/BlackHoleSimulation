class Photon {

    constructor(pos) {
        this.pos = new Vector(pos.x / scale, pos.y / scale);
        this.v = new Vector(-c, 0);
        this.a = new Vector(0, 0);
        //TODO history
    }
    
    updateSpeed(bh) {
        this.a = Vector.sub(bh.pos, this.pos);
        this.a.setMag(
            (G * bh.m) / Math.pow(this.a.mag, 2)
        );
        this.v = Vector.add(this.v, Vector.scalar(this.a, deltaT));
        this.v.setMag(c);
    }

    update() {
        this.pos = Vector.add(this.pos, Vector.scalar(this.v, deltaT));
    }

    show() {
        ctxC.fillStyle = "#f9a825";
        ctxC.beginPath();
        ctxC.arc(this.pos.x * scale, this.pos.y * scale, 1, 0, Math.PI * 2, false);
        ctxC.fill(); 
    }

    print() {
        console.log("PHOTON");
        console.log("\tpos.x: " + this.pos.x);
        console.log("\tpos.y: " + this.pos.y);
        console.log("\tv.x: " + this.v.x);
        console.log("\tv.y: " + this.v.y);
        console.log("\ta.x: " + this.a.x);
        console.log("\ta.y: " + this.a.y);
    }

    status() {
        return "PHOTON STATUS <br>" +
            "X: " + this.pos.x + "<br>Y: " + this.pos.y +
            "<br>Vx: " + this.v.x + " <br>Vy: " + this.v.y + 
            "<br>Ax: " + this.a.x + "<br>Ay: " + this.a.y +
            "<br>Real X: " + this.pos.x * scale + "<br>Real Y: " + this.pos.y * scale;
    }
}
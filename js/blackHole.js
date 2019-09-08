class BlackHole {

    constructor(pos, m) {
        this.m = m;
        this.sr = ((2 * G * m) / (Math.pow(c, 2)));
        scale = background.height / ((10 * this.sr));
        factor = this.sr / c;
        deltaT *= factor / 2;
        this.pos = new Vector(pos.x / scale, pos.y / scale);
    }

    print() {
        console.log("BLACKHOLE");
        console.log("\tpos.x: " + this.pos.x);
        console.log("\tpos.y: " + this.pos.y);
        console.log("\tm: " + this.m);
        console.log("\tSr: " + this.sr);
    }

    show() {
        ctxB.fillStyle = "#000000";
        ctxB.beginPath();
        ctxB.arc(this.pos.x * scale, this.pos.y * scale, scale * this.sr, 0, Math.PI * 2, false);
        ctxB.fill();

        ctxB.beginPath();
        ctxB.strokeStyle = "#00FF00";
        ctxB.arc(this.pos.x * scale, this.pos.y * scale, scale * this.sr * 1.5, 0, Math.PI * 2, false);
        ctxB.lineWidth = 1;
        ctxB.stroke();

        ctxB.beginPath();
        ctxB.arc(this.pos.x * scale, this.pos.y * scale, scale * this.sr * 3, 0, Math.PI * 2, false);
        ctxB.strokeStyle = "#FF0000";
        ctxB.lineWidth = 1;
        ctxB.stroke();
        
        ctxB.beginPath();
        ctxB.moveTo(0, (this.pos.y - 2.6 * this.sr) * scale);
        ctxB.lineTo(background.width, (this.pos.y - 2.6 * this.sr) * scale);
        ctxB.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
        ctxB.strokeStyle = "#000";
        ctxB.lineWidth = 1;
        ctxB.stroke();

    }
}
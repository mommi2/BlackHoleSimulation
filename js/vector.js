class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag = Math.sqrt((x * x) + (y * y));
    }

    setMag(newMag) {
        this.x /= this.mag;
        this.y /= this.mag;
        
        this.x *= newMag;
        this.y *= newMag;
        this.mag = Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    scalar(scalar) {
        this.setMag(this.mag * scalar);
    }

    static scalar(vector, scalar) {
        return new Vector(vector.x * scalar, vector.y * scalar);
    }
    
    print() {
        console.log("VECTOR");
        console.log("\tx: " + this.x);
        console.log("\ty: " + this.y);
        console.log("\tmag: " + this.mag);
    }

    static add(vector1, vector2) {
        return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    static sub(vector1, vector2) {
        return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
    }

}
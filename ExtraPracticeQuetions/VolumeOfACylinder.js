// cylinderVolume.js <by: Lamar Jones Ndubi>

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Execute to test the class
let cylinder = new Cylinder(3, 5);
console.log("Volume of the cylinder: " + cylinder.getVolume());

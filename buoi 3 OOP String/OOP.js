class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}
class Line {
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }
    getDis(){
        let dx = this.pointA.x - this.pointB.x;
        let dy = this.pointA.y - this.pointB.y;
    }
}
class Triangle{
    constructor(line1, line2, line3){
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
    }
    getPerimeter(){
        let disLine1 = line1.getDis();
        let disLine2 = line2.getDis();
        let disLine3 = line3.getDis();
        return disLine1 + disLine2 + disLine3;
    }
}
let point1 = new Point(1, 1);
let point2 = new Point(2, 2);
let point3 = new Point(3, 3);

let line1 = new Line(point1, point2);
let line2 = new Line(point1, point3);
let line3 = new Line(point2, point3);
console.log(line1.getDis())

let triangle = new Triangle(line1, line2, line3);
console.log(triangle.getPerimeter());



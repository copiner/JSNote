/*
函数声明和类声明之间的一个重要区别是函数声明会提升，类声明不会
*/
class Rectangle{
    //constructor
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    //Getter
    get area(){
        return this.calcArea()
    }

    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10,20);

console.log(square.area);


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

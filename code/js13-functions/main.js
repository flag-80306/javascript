function greeting(name) {
    console.log("Olá " + name + "! Como estás?");   
}

greeting("Helder");
greeting("José");
greeting("Rui");

// 6 funcoes
// rectangleArea
// recanglePerimeter
// circleArea
// circumference (circlePerimeter)
// squareArea
// squarePerimeter

function rectangleArea(width, height) {
    const result = width * height;
    return result;
}

function rectanglePerimeter(width, height) { 
    const result = 2 * (width + height);
    return result;
}

function circleArea(radius) {
    const result = Math.PI * Math.pow(radius, 2);
    return result;
}

function circumference(radius) {
    const result = 2 * Math.PI * radius;
    return result;
}

function squareArea(side) {
    const result = rectangleArea(side, side);
    return result;
}

function squarePerimeter(side) {
    const result = rectanglePerimeter(side, side);
    return result;
}

const x = rectangleArea(2, 4);

console.log(x);

console.log( rectanglePerimeter(2, 4) );
console.log(circleArea(3));
console.log(circumference(3));
console.log(squareArea(5));
console.log(squarePerimeter(5));

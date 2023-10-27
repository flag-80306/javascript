function rectanglePerimeter(a, b) {
    return (a + b) * 2;
}

function rectangleArea(a, b) {
    return a * b;
}

function circumference(radius) {
    return Math.PI * 2 * radius;
}

function circleArea(radius) {
    myPrivateFunction();
    return Math.PI * radius * radius;
}

function myPrivateFunction() {
    console.log("I'm super private...");
}

export default {
    rectanglePerimeter,
    rectangleArea,
    circumference,
    circleArea
}
turtle.home();

input.onButtonPressed(Button.A, function() {
    turtle.turnLeft();
});

input.onButtonPressed(Button.B, function() {
    turtle.turnRight();
});

input.onButtonPressed(Button.AB, function() {
    turtle.forward(1);
})
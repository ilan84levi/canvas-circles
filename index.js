function paintCanvas(height, width, radius, colorHex) {
    var canvas = document.getElementById("myCanvas").getContext("2d");

    // Draw Circle:
    canvas.beginPath();
    canvas.arc(width, height, radius, 0, 2 * Math.PI); // x-center, y-center, radius, start-angle, end-angle
    canvas.strokeStyle = colorHex;
    canvas.stroke();

}

function randomNumbers() {
    var max = 900;
    var min = 0;
    for (var i = 1; i <= 100; i++) {
        height = parseInt(Math.random() * (max - min + 1) + min);
        width = parseInt(Math.random() * (max - min + 1) + min);
        radius = parseInt(Math.random() * (max - min + 1) + min);
        paintCanvas(height, width, radius, makeRandomColor());
    }

}

function clearCanvas() {
    var myCanvas = document.getElementById("myCanvas").getContext("2d");
    myCanvas.clearRect(0, 0, 900, 600);
}

function makeRandomColor() {
    var colorHex = "#";
    var possible = "abcdef0123456789";

    for (var i = 0; i < 6; i++)
        colorHex += possible.charAt(Math.floor(Math.random() * possible.length + 1));
    document.getElementById("showHex").innerText = colorHex;
    return colorHex;
}
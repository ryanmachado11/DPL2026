var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var dx = 300, dy = 1;
var speed = 3;
var x = speed;
var animateRunning = true;

function animate() {
    requestAnimationFrame(animate);

    if (!animateRunning) return;

    c.clearRect(300, 0, canvas.width, canvas.height);

    c.fillStyle = "rgb(25, 0, 255)"; 
    c.fillRect(dx, dy, 200, 200);

    dy += x;

    if (dy + 200 > canvas.height - 40) x = -speed;
    if (dy < 0) x = speed;
}

function updateSpeed(value) {
    speed = Number(value);
    x = x < 0 ? -speed : speed;
    var speedLabel = document.getElementById('speedValue');
    if (speedLabel) speedLabel.textContent = speed;
}

function stopAnimation() {
    animateRunning = !animateRunning;
}

animate();

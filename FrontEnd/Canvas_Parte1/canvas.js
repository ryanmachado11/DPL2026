var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var rectangles = [];
var lines = [];
var circles = [];

for (var i = 0; i < 10; i++) {
    rectangles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
    lines.push({
        x1: Math.random() * window.innerWidth,
        y1: Math.random() * window.innerHeight,
        x2: Math.random() * window.innerWidth,
        y2: Math.random() * window.innerHeight,
        dx1: (Math.random() - 0.5) * 4,
        dy1: (Math.random() - 0.5) * 4,
        dx2: (Math.random() - 0.5) * 4,
        dy2: (Math.random() - 0.5) * 4,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
}

for (var i = 0; i < 30; i++) {
    circles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        radius: Math.random() * 30,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    rectangles.forEach(rect => {
        rect.x += rect.dx;
        rect.y += rect.dy;
        if (rect.x < 0 || rect.x > canvas.width - 50) rect.dx = -rect.dx;
        if (rect.y < 0 || rect.y > canvas.height - 50) rect.dy = -rect.dy;
        c.fillStyle = rect.color;
        c.fillRect(rect.x, rect.y, 50, 50);
    });

    lines.forEach(line => {
        line.x1 += line.dx1;
        line.y1 += line.dy1;
        line.x2 += line.dx2;
        line.y2 += line.dy2;
        if (line.x1 < 0 || line.x1 > canvas.width) line.dx1 = -line.dx1;
        if (line.y1 < 0 || line.y1 > canvas.height) line.dy1 = -line.dy1;
        if (line.x2 < 0 || line.x2 > canvas.width) line.dx2 = -line.dx2;
        if (line.y2 < 0 || line.y2 > canvas.height) line.dy2 = -line.dy2;
        c.beginPath();
        c.moveTo(line.x1, line.y1);
        c.lineTo(line.x2, line.y2);
        c.strokeStyle = line.color;
        c.stroke();
    });

    circles.forEach(circle => {
        circle.x += circle.dx;
        circle.y += circle.dy;
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) circle.dx = -circle.dx;
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) circle.dy = -circle.dy;
        c.beginPath();
        c.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        c.strokeStyle = circle.color;
        c.stroke();
    });
}

animate();




function Figure(color, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.w = w;
    this.h = h;
}
function Line(x1, y1, x2, y2, w, color) {
    Figure.call(this, color, '', '', w);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    Line.prototype.draw = function() {  

        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineWidth = this.w;
        ctx.strokeStyle = this.color;
        ctx.stroke(); 
        ctx.closePath();
    }
}
function Circle(x, y, r, color) {
    Figure.call(this, color, x, y);
    this.r = r;

    Circle.prototype.draw = function() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
   

        ctx.closePath();
    }
}
function CircleRound(x, y, r, w, color) {
    Figure.call(this, color, x, y, w);
    this.r = r;

    CircleRound.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.lineWidth = this.w;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    }
}
function Rect(x, y, w, h, color) {
    Figure.call(this, color, x, y, w, h);
   
    Rect.prototype.draw = function() {

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();    
    }
}

Line.prototype = Object.create(Figure.prototype);
Line.prototype.constructor = Line;
Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;
Rect.prototype = Object.create(Figure.prototype);
Rect.prototype.constructor = Rect;
Canvas.prototype = Object.create(Canvas.prototype);
Canvas.prototype.constructor = Canvas;

var ctx;

function Canvas(id) {
   
    ctx = document.getElementById(id).getContext('2d');
    Canvas.prototype.add = function(...arg) {
        for (var i = 0; i < arg.length; i++) {
            
            arg[i].draw();
        }
    }
    
}
var round = new CircleRound(300, 300, 80, 3, 'rgba(200, 0, 85, 0.5)')
var line2 = new Line(170, 300, 100, 120, 5, 'yellow');
var line = new Line(70, 200, 200, 20, 1, 'red');
var rect = new Rect(260, 130, 100, 120, 'rgba(0, 0, 255, 0.5)');
var circle = new Circle(230, 230, 175, 'lime');

var drawArea = new Canvas('canva');

drawArea.add(circle, round, line, line2, rect);













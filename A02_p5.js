/**
 * A02_p5 - a simple JavaScript file that gets loaded with
 * page "A02_p5.html"
 * 
 * started by Michael Gleicher, January 2019
 * 
 * but filled in by STUDENT
 * 
 * Note: the student code should go into the functions
 * wb2_pg5_ex1 and wb2_pg5_ex2
 * 
 */

// we do enable typescript type checking - see
// http://graphics.cs.wisc.edu/WP/cs559-sp2019/typed-js/
// and
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
// @ts-check

/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better 
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, esversion:6 */

/**
 * Function for the STUDENT to do exercise 1
 */
function wb2_pg5_ex1() 
{
        /** @type {HTMLCanvasElement} */
        let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("ex1canvas"));
        let context = canvas.getContext('2d');
    let cirList = [];
    let mouseX = -10;
    let mouseY = -10;
    let mousePress = 0; 
    canvas.onmousemove = function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
        mouseX -= box.left;
        mouseY -= box.top;
    };
    canvas.onmouseleave = function() {
        mouseX = -10;
        mouseY = -10;
        mousePress = 0;
    };
    canvas.onmousedown = function() {
        mousePress = 1;
    };
    canvas.onmouseup = function() {
        mousePress = 0;
    };
    
    function ex1animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if ((mouseX > 0) && (mouseY > 0) && (mousePress == 1)) {
                cirList.push({"x":mouseX, "y":mouseY, "r":20, "s":0, "e":Math.PI*2, "anti":true});
        }
        cirList.forEach(function(cir) {
            context.beginPath();
            context.arc(cir.x, cir.y, cir.r, cir.s, cir.e, cir.anti);
            context.closePath();
            let diff = Math.pow((mouseX - cir.x), 2) + Math.pow((mouseY - cir.y), 2);
            let dis = Math.sqrt(diff);
            if (dis < cir.r) {
                context.fillStyle = "#E6B0AA";
                context.strokeStyle = "#A93226";
            }
            else {
                context.fillStyle = "#A9DFBF";
                context.strokeStyle = "#196F3D";   
            }
            context.lineWidth = 5;
            context.fill();
            context.stroke();
        });
        window.requestAnimationFrame(ex1animate);
    }
    ex1animate();

};

/**
 * Function for the STUDENT to do exercise 1
 */
function wb2_pg5_ex2()
{
        /** @type {HTMLCanvasElement} */
        let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("ex2canvas"));
        let context = canvas.getContext('2d');
        let xpos = -10;
        let ypos = -10;
        let press = 0;
        let cirList = [];
        let sqList = [];
        
        function random(min, max) {
            return Math.random() * (max - min) + min;
        }
        function get_dist(x1, y1, x2, y2) {
            let xdist = x1 - x2;
            let ydist = y1 - y2;
            return Math.sqrt(Math.pow(xdist, 2) + Math.pow(ydist, 2));
        }

        function draw_cir(x, y) {
            cirList.forEach(function(cir) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(x, y, 5, 0, Math.PI * 2, true);
                context.closePath();
                context.fillStyle = "#F87DC7";
                context.fill();   
            })
        };
        
        
        function draw_sq(x, y, w, h) {
                context.fillStyle = "#F87FC7";
                context.fillRect(x, y, w, h);
        }
        canvas.onmousedown = function (event) {
            xpos = event.clientX;
            ypos = event.clientY;
            let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
            xpos -= box.left;
            ypos -= box.top;
            press = 1;
        };
        canvas.onmouseleave = function() {
            xpos = -10;
            ypos = -10;
            press = 0;
        };
        canvas.onmouseup = function() {
            press = 0;
        };
        function expo() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            if ((xpos > 0) && (ypos > 0)) {
                let vx = (Math.random() - 0.5) * 5;
                let vy = (Math.random() - 0.5) * 5;
                
                
                sqList.push({"x": xpos, "y": ypos, "s": 3, "vx": vx, "vy": vy});
                
            }
            sqList.forEach(function(sq) {
                    sq.y -= sq.vy;
                    sq.x -= sq.vx;
            });
            sqList = sqList.filter(
                sq => ((sq.y>0)&&(sq.x>0)&&(sq.x<canvas.width)
                        &&(sq.y<canvas.height))
            );
            sqList.forEach(function(sq) {
                let w = sq.s*2;
                draw_sq(sq.x-sq.s, sq.y-sq.s, w, w);
                sq.y -= sq.vy;
                sq.x -= sq.vx;
            });
        }
        function ex2animate() {
            if ((xpos > 0) && (ypos > 0) && (press == 1)) {
                cirList.push({"x": xpos, "y": canvas.height, 
                    "r": 5, "s": 0, "e": Math.PI * 2, "anti": true});
            }
            cirList.forEach(function(cir) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                let dist = cir.y - ypos;  
                draw_cir(cir.x, cir.y); 
                if (Math.round(dist) == 0) {
                    cirList.splice(0,1);
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    window.requestAnimationFrame(expo);
                    expo();
                }
                else
                    cir.y -= (dist * 0.1);
            });
            window.requestAnimationFrame(ex2animate);
        }
    ex2animate();
}

/**
 * Function to run the student's code
 */
window.onload = function() {
    wb2_pg5_ex1();
    wb2_pg5_ex2();
};
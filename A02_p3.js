/**
 * A02_p3 - a simple JavaScript file that gets loaded with
 * page "A02_p3.html"
 * 
 * started by Michael Gleicher, January 2019
 * 
 * finished by STUDENT
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
 * Put your code for picture 1 here
 * 
 * Remember to make:
 * - a circle
 * - a triangle
 * - a capsule (two semi-circles with straight lines connecting them)
 * - a sawtooth / mountain
 */
function wb2_pg3_ex1() {
    // use type information to make TypeScript happy
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
    function draw_circle() {
        if (canvas.getContext) {
            let cir = canvas.getContext("2d");
            cir.beginPath();
            cir.arc(80, 60, 30, 0, Math.PI * 2, true);
            cir.closePath();
            cir.fillStyle = "#FADBD8";
            cir.strokeStyle = "#D98880"
            cir.lineWidth = 5;
            cir.fill();
            cir.stroke();
        }
    }
    function draw_capsule() {
        if (canvas.getContext) {
            let capsule = canvas.getContext("2d");
            capsule.beginPath();
            capsule.arc(200, 60, 30, Math.PI * 0.5, Math.PI * 1.5, false);
            capsule.arc(300, 60, 30, Math.PI * 1.5, Math.PI * 0.5, false);
            capsule.moveTo(200, 30);
            capsule.lineTo(300, 30);
            capsule.moveTo(300, 90);
            capsule.lineTo(200, 90);
            capsule.closePath();
            capsule.fillStyle = "#FEF9E7";
            capsule.strokeStyle = "#F8C471";
            capsule.lineWidth = 5;
            capsule.fill();
            capsule.stroke(); 
        }
    }
    function draw_triangle() {
        if (canvas.getContext) {
            let tri = canvas.getContext("2d");
            tri.beginPath();
            tri.moveTo(80, 120);
            tri.lineTo(45, 180);
            tri.lineTo(115, 180);
            tri.lineTo(115,180);
            tri.closePath();
            tri.fillStyle = "#D6DBDF";
            tri.strokeStyle = "#85929E";
            tri.lineWidth = 5;
            tri.fill();
            tri.stroke();
        }
    }
    function mountain() {
        if (canvas.getContext) {
            let mountain = canvas.getContext("2d");
            mountain.beginPath();
            mountain.moveTo(210, 105);
            mountain.lineTo(170, 140);
            mountain.lineTo(170, 180);
            mountain.lineTo(330, 180);
            mountain.lineTo(330, 140);
            mountain.lineTo(290, 105);
            mountain.lineTo(250, 140);
            mountain.lineTo(210, 105);
            mountain.closePath();
            mountain.fillStyle = "#D4E6F1";
            mountain.strokeStyle = "#2980B9";
            mountain.lineWidth = 5;
            mountain.fill();
            mountain.stroke();
        }
    }
    draw_circle();
    draw_capsule();
    draw_triangle();
    mountain();
}

/**
 * Put your code for picture 2 here
 */
function wb2_pg3_ex2() {
    // use type information to make TypeScript happy
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas2"));
    function draw_logoA(logoA) {
        logoA.moveTo(120, 50);
        logoA.lineTo(380, 50);
        logoA.lineTo(350, 180);
        logoA.quadraticCurveTo(460, 190, 490, 150);
        logoA.quadraticCurveTo(480, 255, 340, 250);
        logoA.quadraticCurveTo(260, 390, 330, 410);
        logoA.quadraticCurveTo(390, 420, 420, 380);
        logoA.quadraticCurveTo(410, 450, 340, 450);
        logoA.quadraticCurveTo(210, 450, 280, 250);
        logoA.lineTo(220, 250);
        logoA.quadraticCurveTo(290, 440, 160, 450);
        logoA.quadraticCurveTo(100, 450, 80, 380);
        logoA.quadraticCurveTo(130, 420, 170, 410);
        logoA.quadraticCurveTo(230, 390, 160, 250);
        logoA.quadraticCurveTo(50, 250, 10, 150);
        logoA.quadraticCurveTo(50, 190, 150, 180);
        logoA.lineTo(120, 50);
    }
    function draw_blank(blank) {
        //blank.beginPath();
        blank.moveTo(180, 100);
        blank.lineTo(320, 100);
        blank.lineTo(300, 180);
        blank.lineTo(200, 180);
        blank.lineTo(180, 100);
        //blank.closePath();
        
    }
    function move(ctx, x, y) {
        ctx.translate(x, y);
    }
    if (canvas.getContext) {
        let logoA = canvas.getContext("2d");
        logoA.scale(0.8, 0.8);
        move(logoA, 0, 70);
        logoA.beginPath();
        draw_logoA(logoA);
        logoA.closePath();
        logoA.fillStyle = "rgb(174, 214, 241, 0.4)";
        logoA.fill();        
        let blank = canvas.getContext("2d");
        blank.beginPath();
        draw_blank(blank);
        blank.closePath();
        blank.fillStyle = "rgb(255, 255, 255, 0.4)"
        blank.fill();
    }
    if (canvas.getContext) {
        let logoA = canvas.getContext("2d");
        move(logoA, 130, 0);
        logoA.beginPath();
        draw_logoA(logoA);
        logoA.closePath();
        logoA.fillStyle = "rgb(247, 220, 111, 0.4)";
        logoA.fill();
        let blank = canvas.getContext("2d");
        blank.beginPath();
        draw_blank(blank);
        blank.closePath();
        blank.fillStyle = "rgb(255, 255, 255, 0.4)"
        blank.fill();
    }
    if(canvas.getContext) {
        let logoA = canvas.getContext("2d");
        move(logoA, -65, 0);
        logoA.beginPath();
        draw_logoA(logoA);
        logoA.closePath();
        logoA.fillStyle = "rgb(236, 112, 99, 0.5)";
        logoA.fill();
        let blank = canvas.getContext("2d");
        blank.beginPath();
        draw_blank(blank);
        blank.closePath();
        blank.fillStyle = "rgb(255, 255, 255, 0.4)"
        blank.fill();
    }
}

/**
 * you don't need to change this
 */
window.onload = function()
{
    wb2_pg3_ex1();
    wb2_pg3_ex2();
}
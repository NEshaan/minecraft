var canvas = new fabric.Canvas("mycanvas");
var blockImgWidth = 30;
var blockImgHeight = 30;
var playerX = 10;
var playerY = 10;
var playerObject = "";
var blockImgObject = "";
var gridImgObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        blockImgObject = Img;

        blockImgObject.scaleToWidth(blockImgWidth);
        blockImgObject.scaleToHeight(blockImgHeight);
        blockImgObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImgObject);
    });
}

function oldImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        gridImgObject = Img;

        gridImgObject.scaleToWidth(blockImgWidth);
        gridImgObject.scaleToHeight(blockImgHeight);
        gridImgObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(gridImgObject);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key = e.keyCode;
    console.log(key);
    if (e.shiftKey == true && key == '80') {
        console.log("SHIFT AND P PRESSED TOGETHER THE WORLD IS ENDING");
        blockImgHeight = blockImgHeight + 10;
        blockImgWidth = blockImgWidth + 10;
        document.getElementById("current_width").innerHTML = blockImgWidth;
        document.getElementById("current_height").innerHTML = blockImgHeight;
        canvas.remove(gridImgObject);
        oldImage("outline.png");
    }
    if (e.shiftKey == true && key == '77') {
        if (blockImgWidth >= 20) {
            console.log("SHIFT AND M PRESSED TOGETHER THE WORLD IS ENDING");
            blockImgHeight = blockImgHeight - 10;
            blockImgWidth = blockImgWidth - 10;
            document.getElementById("current_width").innerHTML = blockImgWidth;
            document.getElementById("current_height").innerHTML = blockImgHeight;
            canvas.remove(gridImgObject);
            oldImage("outline.png");
        }
    }
    if (key == '38') {
        up();
        console.log("Up");
    }
    if (key == '40') {
        down();
        console.log("Down");
    }
    if (key == '37') {
        left();
        console.log("Left");
    }
    if (key == '39') {
        right();
        console.log("Right");
    }
    if (key == '87') {
        newImage('wall.jpg');
        console.log("w");
    }
    if (key == '89') {
        newImage('yellow_wall.png');
        console.log("y");
    }
    if (key == '85') {
        newImage('unique.png');
        console.log("u");
    }
    if (key == '76') {
        newImage('light_green.png');
        console.log("l");
    }
    if (key == '82') {
        newImage('roof.jpg');
        console.log("r");
    }
    if (key == '84') {
        newImage('trunk.jpg');
        console.log("t");
    }
    if (key == '71') {
        newImage('ground.png');
        console.log("g");
    }
    if (key == '68') {
        newImage('dark_green.png');
        console.log("d");
    }
    if (key == '67') {
        newImage('cloud.jpg');
        console.log("c");
    }
}
function right() {
    if(playerX <= 950) {
        playerX = playerX + blockImgWidth;
        canvas.remove(playerObject);
        playerUpdate();
        canvas.remove(gridImgObject);
        oldImage("outline.png");
    }
    console.log("Current Block Height is " + blockImgHeight);
    console.log("Current Player X is " + playerX);
    console.log("Current Block Width is " + blockImgWidth);
    console.log("Current Player Y is " + playerY);
}
function left() {
    if(playerX >= 0) {
        playerX = playerX - blockImgWidth;
        canvas.remove(playerObject);
        playerUpdate();
        canvas.remove(gridImgObject);
        oldImage("outline.png");
    }
    console.log("Current Block Height is " + blockImgHeight);
    console.log("Current Player X is " + playerX);
    console.log("Current Block Width is " + blockImgWidth);
    console.log("Current Player Y is " + playerY);
}
function up() {
    if(playerY >= 0) {
        playerY = playerY - blockImgHeight;
        canvas.remove(playerObject);
        playerUpdate();
        canvas.remove(gridImgObject);
        oldImage("outline.png");
    }
    console.log("Current Block Height is " + blockImgHeight);
    console.log("Current Player X is " + playerX);
    console.log("Current Block Width is " + blockImgWidth);
    console.log("Current Player Y is " + playerY);
}
function down() {
    if(playerY <= 550) {
        playerY = playerY + blockImgHeight;
        canvas.remove(playerObject);
        playerUpdate();
        canvas.remove(gridImgObject);
        oldImage("outline.png");
    }
    console.log("Current Block Height is " + blockImgHeight);
    console.log("Current Player X is " + playerX);
    console.log("Current Block Width is " + blockImgWidth);
    console.log("Current Player Y is " + playerY);
}
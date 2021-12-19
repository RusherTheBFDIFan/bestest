img = "";
status1 = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model's loaded.");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function preload(){
    img = loadImage("medicine.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#007FFF");
    text("Medicine Bottle", 100, 40);
    noFill();
    stroke("#007FFF");
    rect(100, 50, 400, 300);
}

status = "";
value = "";
date = new Date();
day = date.getDate();
month = date.getMonth()+1;
year = date.getFullYear();
currentDate = `${month}/${day}/${year}`;
console.log(currentDate);
document.getElementById("date").innerHTML = currentDate;
function setup () {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw () {
    image(video, 0, 0, 480, 380);
}
function start () {
    objectDetected = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    value = document.getElementById("object").value;
    console.log("Value of text input - " + value);
}
function modelLoaded () {
    image(video, 0, 0, 480, 380);
    console.log("Model Loaded");
    status = true;
}
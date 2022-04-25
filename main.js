function setup()
{
    video = createCapture(VIDEO); 
    video.size(550, 550);

canvas = createCanvas(550, 550);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("PoseNet Model Loaded");
}

function gotPoses(results)
{
if(results > 0)
{
console.log(results);
}}

function draw()
{
canvas.background('#c4dbdf');    
}
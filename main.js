var filter_color= "";
function apply(){
    filter_color=document.getElementById("color_name").value;
    console.log(filter_color);
}

function preload(){

}
function setup(){
 canvas= createCanvas(650,450);
 canvas.center();
 live_cam= createCapture(VIDEO);
 live_cam.hide();
}

function draw(){
    image(live_cam,0,0,650,450);
    tint(filter_color);
}

function take_snapshot(){
    save('Edited_with_filter.png');
}
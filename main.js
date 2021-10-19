c1=document.getElementById("myCanvas");
ctx=c1.getContext("2d")
rw=100;
rh=100;
rx=10;
ry=10;
img_array=["mars.jpg","NASA01.jpg","NASA2.jpg","NASA3.jpg","NASA4.jpg","NASA5.jpg"]
roverimage="rover.png";
r1=Math.floor(Math.random()*6)
canvasimage=img_array[r1]
function add(){
  bgi=new Image();
  bgi.onload=uploadbg;
  bgi.src=canvasimage;
  
  ri=new Image();
  ri.onload=uploadrover;
  ri.src=roverimage;
}

function uploadbg(){
  ctx.drawImage(bgi,0,0,c1.width,c1.height);
}

function uploadrover(){
  ctx.drawImage(ri,rx,ry,rw,rh);
}

window.addEventListener("keydown",myKeydown);
function myKeydown(e){
  keypress=e.keyCode;
  if(keypress=='38'){
  up();console.log("up");
  }
  if(keypress=='40'){
      down();console.log("down");
  }
  if(keypress=='37'){
    left();console.log("left");
  }
  if(keypress=='39'){
      right();console.log("right");
  }
}
function up(){
    if(ry>=0){
    ry=ry-10;
    uploadbg();
    uploadrover();
    }
}
function down(){
   if(ry<=500){
       ry=ry+10;
       uploadbg();
       uploadrover();
   }
}
function left(){
   if(rx>=0){
   rx=rx-10;
   uploadbg();
   uploadrover();
   }
}
function right(){
    if(rx<=700){
      rx=rx+10;
    uploadbg();
    uploadrover();
    }
}

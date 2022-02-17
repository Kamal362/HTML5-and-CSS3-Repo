var image=document.getElementById("imagesContainer");
var array=["images/10.jpg","images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg"];
var index=0;

function imagesChange(){
    image.setAttribute("src",array[index]);
    index++;
    if(index>=array.length){
        index=0;
    }
}
setInterval(imagesChange, 2000);
//alert("Do you want to watch aventures stars?");

// click to display
// const next = document.querySelector('next');
// const prev = document.querySelector('prev');
// var display = document.querySelector('click_display');

var next = document.getElementById('next');
var prev = document.getElementById('prev');
var display = document.getElementById('display');

function imagesChangeNext(){
    display.setAttribute("src",array[index]);
    index++;
    if(index>=array.length){
        index=0;
    }
}
function imagesChangePrev(){
    display.setAttribute("src",array[index]);
    index++;
    if(index<=array.length){
        index=0;
    }
}
"use strict";
function changeImage() {
    let mClass = document.getElementById('m-class');
    mClass.classList.toggle('start');
    let messageImage = document.getElementById('message-switch'); 
    if(mClass.classList.contains('start')) {
        messageImage.src="./src/images/recive.svg";
    } else {
        messageImage.src="./src/images/recive_stop.svg";
    }
    
}
"use strict";
function changeImage() {
    let mClass = document.getElementById('m-class');
    mClass.classList.toggle('start');
    let messageImage = document.getElementById('message-switch'); 
    if(mClass.classList.contains('start')) {
        messageImage.src="./src/images/수합중.svg";
    } else {
        console.log('수합중지');
        messageImage.src="./src/images/수합중지.svg";
    }
    
}
var aud;
var box;

document.addEventListener("keydown",(e)=>{
    
    //for pausing previous audio
    if(aud){
        aud.pause();
        box.classList.remove("change");
    }

    //playing new audio
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    aud=audio;
    audio.currentTime=0;

    if(audio!==null){
        // console.log(audio)
        audio.play();

        var elem=document.querySelector(`div[data-key="${e.keyCode}"]`);
        box=elem;
        elem.classList.add("change");

    }
})




// function end(e){
//     if(e.propertyName!=="transform"){
//         return;
//     }
//     this.classList.remove("change")
// }

// var keys=document.querySelectorAll(".key");

// keys.forEach(key=>key.addEventListener("transitionend",end))
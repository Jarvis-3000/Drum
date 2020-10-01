var aud;
var box;

var p=document.querySelectorAll('.drum');

for(var i=0;i<7;i++)
{
document.querySelectorAll('.drum')[i].addEventListener("click",function()
{
    var ans=this.innerHTML;
    console.log(ans);
    makeChange(ans);
    
    switch(ans)
    {
        case 'w':
            var sound=new Audio('sounds/1.mp3');
            sound.play();
            break;
        case 'a':
            var sound=new Audio('sounds/2.mp3');
            sound.play();
            break;
        case 's':
            var sound=new Audio('sounds/3.mp3');
            sound.play();
            break;
        case 'd':
            var sound=new Audio('sounds/4.mp3');
            sound.play();
            break;
        case 'j':
            var sound=new Audio('sounds/5.mp3');
            sound.play();
            break;
        case 'k':
            var sound=new Audio('sounds/6.mp3');
            sound.play();
            break;
        default:
            var sound=new Audio('sounds/7.mp3');
            sound.play();
            break;


    }   
       
       });
}


for(var i=0;i<7;i++)
{
document.querySelectorAll('.drum')[i].addEventListener("keypress",function(event)
{
    var ans=event.key;
    console.log(ans);
    ans=ans.toLowerCase();
    makeChange(ans);
    
    switch(ans)
    {
        case 'w':
            var sound=new Audio('sounds/1.mp3');
            sound.play();
            break;
        case 'a':
            var sound=new Audio('sounds/2.mp3');
            sound.play();
            break;
        case 's':
            var sound=new Audio('sounds/3.mp3');
            sound.play();
            break;
        case 'd':
            var sound=new Audio('sounds/4.mp3');
            sound.play();
            break;
        case 'j':
            var sound=new Audio('sounds/5.mp3');
            sound.play();
            break;
        case 'k':
            var sound=new Audio('sounds/6.mp3');
            sound.play();
            break;
        case 'l':
        var sound=new Audio('sounds/7.mp3');
        sound.play();
        break;

    }   
       
       });
}

function makeChange(ans)
{
    var ab=document.querySelector("."+ans);
    ab.classList.add("pressed");
    setTimeout(function(){
        ab.classList.remove("pressed");
    },100);

}




// function end(e){
//     if(e.propertyName!=="transform"){
//         return;
//     }
//     this.classList.remove("change")
// }

// var keys=document.querySelectorAll(".key");

// keys.forEach(key=>key.addEventListener("transitionend",end))
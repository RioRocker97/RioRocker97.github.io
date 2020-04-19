var mynav = document.getElementById("my-nav");
document.addEventListener("scroll",function(){dynamicNavbar()})
var lastscroll = 0
function dynamicNavbar(){
    let currentscroll = window.pageYOffset;
    //console.log(lastscroll,currentscroll)
    if(lastscroll > currentscroll || window.pageYOffset <= 100){
        mynav.style.transition = "transform 0.3s"
        mynav.style.transform = "translate3d(0,0,0)"
    }
    else{
        mynav.style.transition = "transform 0.3s"
        mynav.style.transform = "translate3d(0,-100%,0)"
    }
    lastscroll = currentscroll
}
console.log(window.innerWidth);
var mynav = document.getElementById("my-nav");
window.onscroll = function(){dynamicNavbar()};
function dynamicNavbar(){
    if(window.pageYOffset >= 20){
        mynav.style.backgroundColor = "rgba(255,196,196,1)" ;
        mynav.style.transition = "transform 0.3s"
        mynav.style.transform = "translate3d(0,-100%,0)"
    }
    else{
        mynav.style.backgroundColor = "rgba(0, 0, 0, 0.2)" ;
        mynav.style.transition = "transform 0.3s"
        mynav.style.transform = "translate3d(0,0,0)"
    }
}
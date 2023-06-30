let ubicacionPrincipal = window.scrollY;
window.onscroll = function() {
    let desplazamiento_Actual = window.scrollY;
    if(desplazamiento_Actual>=280){
        document.getElementById("img-navbar").style.visibility="visible";}
    else{
        document.getElementById("img-navbar").style.visibility="hidden";}
}
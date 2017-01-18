/*
Geovanni Rojas Mazariegos
Zero Innovation
2016
*/



/*
This function is at the start of everthing
*/
window.onload = function() {

}
/*
Event Listener type mouse click
*/
if (document.addEventListener ){
    document.addEventListener("click", function(event){

        var targetElement = event.target || event.srcElement;

        // Eventlistener titlePage
        if (targetElement == document.getElementById("titlePage")){
          targetElement.innerHTML="Nuevo texto";
        }

    });
}

/*
Event Listener type blur
*/
if (document.addEventListener ){
    document.addEventListener("blur", function(event){

        var targetElement = event.target || event.srcElement;

        // Eventlistener title2
        if (targetElement == document.getElementById("title2")){
          targetElement.style.backgroundColor = "blue";
        }

    });
}

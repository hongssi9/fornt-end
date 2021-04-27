window.addEventListener("load", function(){
    var header = document.querySelector("#header");
    var menuButton = header.querySelector(".icon-menu");

    menuButton.onclick = function(e){
        e.preventDefault(); 
       
       slideIn("#aside");
    };
});
window.addEventListener("load", function(){
    var header = document.querySelector("#header");
    var menuButton = header.querySelector(".icon-menu");

    menuButton.onclick = function(e){
        e.preventDefault(); 
        console.log("test");
        var screen = document.createElement("div");
        screen.style.width = "100%";
        screen.style.height = "100%";
        screen.style.backgroundColor = "black";
        screen.style.position = "fixed";
        screen.style.top = "0px";
        screen.style.left = "0px"
        screen.style.opacity = 0;
        screen.style.transition = "2s";

        setTimeout(function(){
            screen.style.opacity = 0.7;
        },10);

        document.body.append(screen);

        var aside = document.querySelector("#aside");
        aside.style.position = "fixed";
        aside.style.left = 
        aside.style.top = "0px";
    };
});
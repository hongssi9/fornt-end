function slideIn(selector) {
    console.log("test");
    var screen = document.createElement("div");
    var aside = document.querySelector("#aside");

    screen.style.width = "100%";
    screen.style.height = "100%";
    screen.style.backgroundColor = "black";
    screen.style.position = "fixed";
    screen.style.top = "0px";
    screen.style.left = "0px"
    screen.style.opacity = 0;
    screen.style.transition = ".5s";

    setTimeout(function () {
        screen.style.opacity = 0.7;
    }, 0);

    document.body.append(screen);

    screen.ontransitionend = function (e) { //ontransitionend : screen이 다 끝나고 실행

        // aside.style.position = "fixed";
        // aside.style.left = "-30%";
        // aside.style.width = "30%";
        // aside.style.height = "100%"
        // aside.style.top = "0px";
        // aside.style.transition = "2s";
        // aside.style.backgroundColor = "red";

        aside.style.position = "fixed";
        aside.style.height = "100%";
        aside.style.width = "70%";;
        aside.style.left = "100%";
        aside.style.top = "0px";
        aside.style.zIndex = 10;
        aside.style.transition = ".5s";

        setTimeout(function () {
            aside.style.left = "30%";
            // aside.style.left = "0%";
        }, 0);
    }

    screen.onclick = function () {
        aside.style.transition = "initial";
        aside.style.height = "initial";
        aside.style.position = "static";
        screen.remove();


        // aside.style.left = "100%";    //역방향으로 지우기~
        // aside.ontransitionend = function(){
        //     screen.style.opacity = 0;
        //     aside.style.position = "static";
        // }

    }
}
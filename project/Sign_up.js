window.addEventListener("load", function(){
    var section = document.querySelector("#main");
    var ID_txt = section.querySelector(".ID_txt");
    var PW_txt = section.querySelector(".PW_txt");
    var PWR_txt = section.querySelector(".PWR_txt");
    var NAME_txt = section.querySelector(".NAME_txt");
 
    var selected = null;
    

    ID_txt.onclick = function(){
        var div = document.createElement("label");

        div.innerText = "야아아아아";

        div.append("야아아아ㅏㅇ아아");

        ID_txt(ID_txt.value).append(div);
        console.log("id")
    }




    

});
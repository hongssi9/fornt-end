window.onload = function () { //로드되었을때...

    var asideTitle = window.document.getElementById("aside-title");
    var a1 = document.getElementById("a1"); //a1을 찾아달라..

    asideTitle.onclick = function () {
        var x = prompt('x:');
        var y = prompt('y:');
        x = parseInt(x);
        y = parseInt(y);
        asideTitle.innerText = x + y; //innerText = 클릭하는 텍스트가 값으로 변경된다.
        a1.value = x + y;
    }
};
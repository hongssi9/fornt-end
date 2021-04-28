function box_change() { //성별 이벤트핸들러
    var man = document.querySelector("#man")
    var woman = document.querySelector("#woman")



    if (man.checked) {
        document.getElementById("box-m").className = 'box_change';
        document.getElementById("box-w").className = 'gender';
        console.log("tst1")
    }

    if (woman.checked) {
        document.getElementById("box-w").className = 'box_change';
        document.getElementById("box-m").className = 'gender';
        console.log("tst")
    }
}



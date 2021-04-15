window.onload = function(){ //정해진 함수?
   var section = document.getElementsByClassName("ex2");
   var x_ = document.getElementsByClassName("text-x")[0];
   var y_ = document.getElementsByClassName("text-y")[0];
   var sum_ = document.getElementsByClassName("text-sum")[0];
   var btn_ = document.getElementsByClassName("submit-btn")[0];
    

   btn_.onclick = function(){
     
       var x = parseInt(x_.value); //x 변수에 값을 정수형으로 변환하여 넣어준다
       var y = parseInt(y_.value);

       //sum_.innerText = x+y; //텍스트를 바꿀때는 innerText
       sum_.value = x+y;
        
    };
    

};








// window.onload = function () { //로드되었을때...

//     var section = document.getElementById("ex1"); //ID로 찾겠다
//     var btn = section.getElementsByClassName("btn")[0]; //클래스명으로 찾겠다 //document와 section구별...->어느 지역에서 찾을건지...


//     btn.onclick = function () {
//         console.log("test");
//     }
// };
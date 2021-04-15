// ---------------------chiledNodees를 이용한 노드 선택-------------------------
// window.onload = function(){
//     var section4 = document.querySelector("#section4");
//     var box = section4.querySelector(".box");
//     // section4 는 document객체를 사용하여 id section4에 공간을 가져왔다
//     // document로 이미 웹페이지 자체가 되었으니 section4변수에있는 공간에서 class.box값을 가져 올 수 있다.

//     var input1 = box.children[0]; //box에 있는 자식 0번째를.. //자식을 찾을수 있는..             
//     var input2 = box.children[1]; //childNodes 빈공백이 들어가면 그 빈 공간도 자식으로....
//                                   //chtledren은 태그형태로 된것만 자식으로 본다.
//     input1.value = "hello";
//     input2.value = "okay";

//  };



//------------------------------선택------------------------------
// window.onload = function(){ //정해진 함수명?
//     var section = document.getElementById("ex3");
//     var x_ = document.querySelector("input[name='text-x']"); //다른 방법 input태그에 name이 text-x라는걸...
//     var y_ = document.querySelector(".text-y");//All은 여러개를 찾을때
//     var sum_ = document.querySelector(".text-sum");
//     var btn_ = document.querySelector(".submit-btn");
//      //Document : 웹페이지 그 자체 HTML접근하려면 document객체부터..
 
//     btn_.onclick = function(){
      
//         var x = parseInt(x_.value); //x 변수에 값을 정수형으로 변환하여 넣어준다
//         var y = parseInt(y_.value);
 
//         //sum_.innerText = x+y; //텍스트를 바꿀때는 innerText
//         sum_.value = x+y;
         
//      };
     
 
//  };




// ---------------------------------------------------------------
// window.onload = function(){ //정해진 함수?
//    var section = document.getElementById("ex2");
//    var x_ = section.getElementsByClassName("text-x")[0];
//    var y_ = section.getElementsByClassName("text-y")[0];
//    var sum_ = section.getElementsByClassName("text-sum")[0];
//    var btn_ = section.getElementsByClassName("submit-btn")[0];
    
    
//   btn_.onclick = function(){
     
//        var x = parseInt(x_.value); //x 변수에 값을 정수형으로 변환하여 넣어준다
//        var y = parseInt(y_.value);

//        //sum_.innerText = x+y; //텍스트를 바꿀때는 innerText
//        sum_.value = x+y;
        
//     };
// };

// ------------------------------------내가한거-------------------------------
window.onload = function(){
    var section = document.querySelector("#ex2");
    var x_ = section.querySelector(".text-x");
    var y_ = section.querySelector(".text-y");
    var btn = section.querySelector(".submit-btn");
    var sum_ = section.querySelector(".text-sum");

    btn.onclick = function(){
        var x = parseInt(x_.value);
        var y = parseInt(y_.value);
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


//질문1 getElementById("ex2"); ex2로 해도 ex3섹션이 실행된다.  해결-> ex2를 지정한 section변수를 활용하지않아서 그럼 document로 전체를 불러오니 
//질문2 이미 document로 가져온 섹션으로 selec하면 다른이유
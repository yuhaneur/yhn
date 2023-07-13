// var redCup=10;
// var blueCup=20;
// var whiteCup=0;

// document.write("변경전 빨간컵 : "+redCup+"파란컵 :"+blueCup+"<br>");

// whiteCup = redCup;
// redCup=blueCup;
// blueCup=whiteCup; 

// document.write("변경후 빨간컵: "+redCup+"파란컵 : "+blueCup);
//위 물음표 세줄에 들어갈 알맞은 코드를 작성하시오
//화면에 출력 되는 내용은 다음과 같습니다.
//변경전빨간컵 : 10 파란컵 : 20
//변경후빨간컵 : 20 파란컵 : 10

// var jin =0;
// var red=1;
// var blue=2;
// var yellow=3;
// var green=4

// jin = red;
// document.write("변경전 : " + jin +"<br>");

// jin = green;
// document.write("변경후 : "+jin);

//jin(청바지)에 빨간색으로물들였다.
//청바지를 녹색으로 물들이고 청바지의 색이 무엇인지 출력하시오
//실제 색의 출력은 그냥 숫자만 나오면 된다.(1-빨, 2-파)

//데이터를 저장 하는 가장 기본적인 방법은 변수입니다.
//변수를 모르면 할 수있는게 없어요...
// 변수에 저장되는 데이터는 오직 하나 !
// 변수에 다른 데이터를 저장하면 이전데이터위에 덮어쓰기 합니다.
// 스크립트에서 변수는 숫자를 가질수도 문제를 가질수도 있어요
// 숫자를 저장했다고 문자 저장 못하는거 아니에요

//제어문 - 조건문, 반복문
// 조건문 - if문, switch문
// 반복문 - for, while, do~while

//if문 - 조건식이 참이냐 거짓이냐에 따라서 코드가 실행된다.(분기문) [갈림길 참or거짓]
//조건식 - 결과가 참과 거짓이 나오는 식 
//         비교 -  [> , < , >= , <=] 대소비율연산자 ,[== ,!=]

// var tall = 130;
// if( tall >= 140)
// { // 조건식이 참일경우 실행되는곳 
//     document.write("바이킹 탑승");
// }else{ //조건식이 거짓일때만 실행되는곳
//     document.write("바이킹 탑승 불가");
// }

// var speed=Number(prompt("속도"));

// if( speed < 70){
//     document.write("과속아님");
// }else{
//     document.write("과속");
// }
// // 내 점수의 등급을 출력하고 싶다.
// //90점 이상이면 A ,80 이상 B, 70점이상 C ,나머지F
// var score = Number(prompt("나의 점수"));
// if(score>=90){
//     document.write("<br> A등급");
// }else if(score >=80){
//     document.write("<br>B 등급");
// }else if(score>=70){
//     document.write("<br>C 등급");
// }else{
//     document.write("<br>F 등급")
// }

//음식을 배달 주문 하였다.
//  음식점의 위치는 중구 대흥동이다.
//  같은 구에서 주문하면 배달료 0원,
//서구에서 주문하면 배달료 1000원,
//동구에서 주문하면 배달료 2000원 이라면
//현재 나의 위치는 어디인지 입력하여
//배달료 얼마인가 출력하시오
//(중구,서구,동구 중 하나만 입력합니다.)

// var mo = (prompt("나의위치"));
// var tip=0;

// if(mo=="서구"){
//     tip=1000;
// }else if(mo =="동구"){
//     tip=2000;
// }
// document.write(mo+"에서 주문배달료는: "+tip+"원<br>")

// if(mo == "중구"){
//     document.write("<br> 0원");
// }else if(mo == "서구"){
//     document.write("<br>1000원");
// }else if(mo == "동구"){
//     document.write("<br> 2000원")
// }

// var sk = Math.floor(Math.random()*10)+1;
// //Math.floor < 정수부분만표현
// //Math.random()*x 하면 x-1 의 랜덤값이나옴
// document.write( sk );

// 동전 맞추기 ,1- 앞면, 2-뒷면

// var coin = Math.floor(Math.random()*2)+1;
// var user =prompt("1.앞면 2.뒷면");
// if(isNaN(user)){ //isNaN 함수는 숫자로 변환이 가능한경우 거짓,
//                  // 숫자로 변환이 불가능한경우 참 이다.
//     alert("숫자만 입력하세요");
//     user = prompt("1.앞면 2.뒷면");
// }
// user = Number(user);//문자열을 숫자로 변환

// if( coin==user){
//     document.write((user==1 ? '앞면' : "뒷면")+"정답");
// }else{
//     document.write("틀렸어...");
// }
// document.write((user==1 ? '앞면' : "뒷면")+"정답");
// ? 앞에있는게 참 뒤에있는게 거짓 간단한 명령문 만들때 사용

// 주사위 게임
// 주사위는 던져졌다. 주사위의 숫자 무엇인지 맞추시오.
// 내가 입력한 숫자가 주사위의 숫자와 같아면 정답, 같지않다면 손목
//이라고 출력

var di = Math.floor(Math.random()*6)+1;
var user = prompt("주사위 숫자 맞춰")
user=Number(user);
if( di==user){
    document.write("정답"+di);
}else if(di!=user){
    document.write("손목");
}
//함수로표현한다면
function inputNum(str){
    var a= prompt(str);
    while( isNaN(a)){
        alert("숫자만 입력 가능합니다.");
        a=prompt(str);
    }
    a=Number(a);
    return a;
}

/*
    주차장 요금 계산
    주차장 기본요금 1000원 (30분)
    10분 초과시 100원 추가

    2시간 이상 주차시 기본요금 1500원 (2시간 1500원)
    4시간 이상 주차시 기본요금 2500원
    8시간 이상 주차시 무조건 5000원

    주차한 시간이 총 몇분인가 입력하여 요금 출력하기
 */

var park = prompt("주차 시간")
if (park<40){
    document.write("1000원")
}


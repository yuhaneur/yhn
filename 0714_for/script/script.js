//for ~하는 동안은 계속 반복한다.
// for(시작값; 조건식; 증강식){}
//조건식에다가 반복할 내용 쓰기
// i = iteration count 줄임말 /i는 반복한 횟수를 의미

// text = "a";
// text = text + "b";
// for(i=0; i<5 ; i++){
//     document.getElementById("para1").innerHTML = document.getElementById("para1").innerHTML+i;
// }

//0부터 100까지의 정수를 더하는 코드를 작성하시오.
// var total=0;

// for(i=1; 1<=100; i++){
//     total = total +i;
// }
// document.getElementById("para1").innerHTML = total;
//100부터 0까지의 정수를 더하는 코드를 작성하시오
// var total=0;
// for(i=100; i>=0; i--){
//     total = total + i;
// }

//0+2+4+6+8+10+ ...+96+98+100
// var total = 0;
// for(1=0; i<=100; i++){
//     if(i%2 == 0){
//         total = total + i;
//     }
// }
// document.getElementById("paral").innerHTML = total;

// //1+3+5...+97+99
// var total =0;
// for(i=0;i<100;i++){
//     if(i%2 == 1){
//         total = total +i;
//     }
// }
// document.getElementById("paral1").innerHTML = total;

//아이디가 para1인 태그 내부에 100개의 *을 기입하는 코드를 작성하시오
// var star="";
// for(i=0;i<100;i++){
//     star = star +"*";
// }
// document.getElementById("para1").innerHTML = star;

//아이디가 date인 태그의 내부에 <option></optinon>를 기입하는 행위를 
//31번 반복하되 옵션태그 내에는 1부터 31까지의 숫자가 들어가야한다.
//반복하자 31번
    //아이디 date에 내용 추가하자
        //<option>[반복한횟수+1]</option>
// var tag = "";
// for(i=0;i<31;i++){
//     tag = tag+ "<option>"+(i+1)+"</option>";
// }
// document.getElementById("date").innerHTML = tag;

// 오감도 - 이상
var fiveSense = "";
for(i=0;i<13;i++){
    fiveSense = fiveSense + "제 "+(i+1)+"의 아해가 무섭다고 그리오"<br>
}        
document.getElementById("para1").innerHTML = fiveSense;


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
var total=0;

for(i=1; 1<=100; i++){
    total = total +i;
}
document.getElementById("para1").innerHTML = total;
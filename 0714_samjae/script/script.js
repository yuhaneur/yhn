
var ganji=["신","유","술","해","자","축","인","묘","진","사","오","미",];
function zodiac(year){
     return ganji[year%12]; 
}
document.getElementById("btn").onclick = function(){
    var samjae = false;
    var birth =  document.getElementById("birth").value;
    var target = document.getElementById("target").value;
    if(birth.length * target.leng == 0){
        alert("생년과 대상연도를 입력해주세요.")
    }else{
        var birthDdi = zodiac(birth);
        var targetDdi = zodiac(target);
        if(birthDdi=="신" || birthDdi=="자"||birthDdi=="진"){
            if(targetDdi=="인"||targetDdi=="묘"||targetDdi=="진"){
                samjae =true;
            }else{
                samjae=false;
            }
        }
        if(birthDdi=="인" || birthDdi=="오"||birthDdi=="술"){
            if(targetDdi=="신"||targetDdi=="유"||targetDdi=="술"){
                samjae =true;
            }else{
                samjae=false;
            }
        }
        if(birthDdi=="사" || birthDdi=="유"||birthDdi=="축"){
            if(targetDdi=="해"||targetDdi=="자"||targetDdi=="축"){
                samjae =true;
            }else{
                samjae=false;
            }
        }
        if(birthDdi=="해" || birthDdi=="묘"||birthDdi=="미"){
            if(targetDdi=="사"||targetDdi=="오"||targetDdi=="미"){
                samjae =true;
            }else{
                samjae=false;
            }
        }
        if(samjae){
            alert(birthDdi+"당신은"+target+"년에 삼재입니다.");
        }else{
            alert(birthDdi+"당신은"+target+"년에 삼재가 아닙니다.");
        }
    }
}

//반복문(for/while)을 제어하는 두가지 방법
//break(그만둔다)
// for(i=o;i<수명;i++){
//     if(사고를 당했다){
//         break; //브레이크만나면 여기서 중지됨
//     }

// for(i=o;i<정년;i++){
//     if(누가 이유없이 나를 미워한다){
//         break;
//     }else{
//         //출근한다
//     }
// }

// //continue(이번턴을 쉰다)
// for(i=0;i<정년;i++){
//     if(큰 병에 걸렸다){
//         continue;
//     }else{
//         //출근한다
// }

//1~100까지의 숫자중 짝수만 더하는 프로그램
//1~100까지의 숫자중 짝수이면 더하고 홀수이면 건너뛰는 프로그램
var total=0;
for(i=1;i<=100;i++){
    if(i%2 ==0){
        total = total + i;
    }else{
        continue;
    }
}
alert(total);
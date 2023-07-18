var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();

// 한자리 숫자일때 좌측에 0을 추가해주는 함수
function addZero(num){
    var result= "";
    if(num<10){
        result = "0"+num;
    }else{
        result = num;
    }
    return result;
}

var day = now.getDay();
var yoil=["일","월","화","수","목","금","토"];
//2023-07-18
month= addZero(month+1);
date = addZero(date);

//2023-07-18 AM 10:03
var hour = now.getHours();
var min =now.getMinutes();
var sec = now.getSeconds();
var ampm="";
if(hour>=12){
    ampm = "PM";
    hour= hour-12;
}else{
    ampm = "AM";
}
if(hour==0){
    hour = 12;
}
hour =addZero(hour);
hour =addZero(min);
hour =addZero(sec);



var narjja = year+"-"+month+"-"+date+" "+yoil[day];
narjja += " ";
narjja += ampm;
narjja += " ";
narjja += hour;
narjja += ":";
narjja += min;
narjja += ":";
narjja += sec;

// alert(narjja); 

//timestamp 이용한 날짜계산
//2022-02-03 이 날로부터 며칠 지났는지?
//now 에서 2022-02-03이라는 시간을 뺴면 => 지나온 세월
//nowd의 timestamp 에서 2022-02-03의 timestamp이라는 시간을 뺴면 => 지나온 세월(timestamp)=> 일자로 계산
document.getElementById("dateBtn").onclick=function(){
    document.getElementById("date").value;
    alert(date);
    var anni = new Date(date);
    var anniTimestamp = anni.getTime();
    var nowTimestamp = now.getTime();
    var duration = nowTimestamp - anniTimestamp;
    duration = duration / 1000;
duration = parseInt(duration); //integer(정수) 초
//하루 =24시간 = 1440분 = 86400초
duration = duration/86400;
duration = Math.floor(duration);
document.getElementById("result").value =duration+"일 째입니다.";
}

//지호야 걸어가라.
// $("지호").walk();
// //날씨가 지호야 비올때 뛰어라가.
// $("날씨").비올때(function(){
//     $("지호").뛰어가라();
// });

// //까마귀 날자 배 떨어진다.
// $("까마귀").날때(function(){
//     $("배").떨어진다();
// });

//지호가 기쁠때 지호는 박수를 쳐라.
// $("지호").기쁠때(function(){
//     $(this).박수치기();
// });

// //남자가 화났을때 [그 사람] 손을들어라.
// $("남자").화났을떄(function(){
//     $(this).손들기();
// });

$(document).ready(function(){
    $("#list1>li").click(function(){
        $(this).hide();
    });
    //#nation인 녀석의 값이 변햇을때
    //alert으로 그녀석의 값을 표시하자
    $("#nation").change(function(){
        alert($(this).val());       
    });

    $("input").focus(function(){
        $(this).css("outline","2px solid red");
    });
    $("input").blur(function(){
        $(this).css("outline","none");
    });

    //#input1에서 키가 눌릴때 (글자가 쓰여질때마다 )
        //그 내용을 #final에 적겠다.
    $("#input1").keyup(function(){
        var t = $(this).val();
        $("#final").text(t);
    });

    $("#submitBtn").click(function(){
        alert();
    });

    //#input2 에서 키가 눌렸을때
        //방금눌린키가 엔터키 라면
            //#sumbitBtn을 누른셈이나 다름없게 하겠다.
    $("#input2").keyup(function(event){
        if(event.keyCode == 13){
            $("#subimtBtn").trigger("click"); // trigger 작동시키겠다
        } //alert(event.keyCode); 키보드 키코드알아내기
    });

    //마우스가 움직일때마다 이런일들을 하겠다.
        //방금 움지긴 그마우스의 x,y좌표를 찾아라.
        // #fly인 녀석에게 x,y좌표를 통해 위치를 지정해준다.
    $(document).mousemove(function(event){
        var x = event.clientX;
        var y = event.clientY;
        $("#fly").css("left",x+"px");
        $("#fly").css("top", y+"px"); // $("#fly").css({left:,x+"px", top:y+"px"});
    });

    //.main에 마우스 올렸을때 이런일이 벌어질 것이다.
        //방금 그것의 자식중 .sub라고 하는 녀석을 보여주자.
    //.main에서 마우스 치웠을때 이런일이 벌어질것이다.
        //방금그것의 자식중 .sub라고 하는 녀석을 숨겨주자.
        $(".main").mouseenter(function(){
            $(this).children(".sub").stop().fadeIn();
        }); 
        $(".main").mouseleave(function(){
            $(this).children(".sub").stop().fadeOut();
        });
});
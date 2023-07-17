
$(function(){

    var bt_list=""; //버튼 태그를 만들어서 담아줄 변수
    for(i=1;i<=8;i++){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);

        bt_list += "<button onclick='select(this)' style='background:rgb("+r+","+g+","+b+")'></button>";
    }

    $("#color").html(bt_list);
});

//함수 - 귀속 되지않은 독립적으로 기능을 수행할수 있는 코드의 집합체
//메서드 -객체에 귀속 되어있는 객체의 기능을 수행하는 코드의 집합체

//open 함수를 통해 새로 창을 열어주면 새창은 자식이고, 새창을 열어준 창은
//부모이다.
//자식은 부모를 지칭할때 opener라고 하고
//부모는 자식을 window.open의 값을 저장해둔 변수로 사용한다.
// var ch= window.open|(.....);
//ch 가 부모창에서 사용할수 있는 자식 이다.
function select(obj){
    var color = $(obj).css("background");
    
    opener.$("table>tbody>tr>td").css("background",color);
}
$(function(){

    $("#open_child").click(function(){

    if($("#name").val()==''){//input 태그에 이름을 입력안했다면
        alert("이름을 먼저 입력하세요");
        $("name").focus(); //해당 인풋태그에 커서를 나타내는거
        return;
    }

        child =  window.open("child.html","","width=500,height=300,top=100,left=300"); // ("주소","대상어디에다넣어줄꺼냐(_slef 띄어진창에서새롭게만듬)",
            //"완전새로운창에다 뛰울거면 너비와 높이/창뜨는 위치 바꿀려면 [모니터기준]top과left로 지정")   
            
           
            
    });                                              
    $("#child_send").click(function(){

        $(child.document).find('#input_name').html($("#name").val());
    })

});
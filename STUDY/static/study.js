let slide_left=0; 

$(function(){
    $(".prev").on("click",function(){ 
        if(0 == slide_left)
            return;

        slide_left+=180; 
        $(".nav_menu").css("left",slide_left+"px");
        
    });
    $(".next").click(function(){
        var li=$(".nav_menu>li");
        var len=li.length;

        
        if( ((len-1)*-180) == slide_left)
            return;
       
        slide_left-=180;
        $(".nav_menu").css("left",slide_left+"px");

       
    });
    make(); 
});
    
function make(){
  
    
    const list = ["이순신","김유신","장보고","강해민","강미정","김선경","김재호",
    "이채영","이재원","여상현","이예진"];
    
    const addr=["대흥동","선화동","은행동","중리동","둔산1동","둔산2동",
    "탄방동","태평동","문화동","갈마동","소재동","삼성동"];
    
    var out="<h3>투게더 명단 ("+list.length+"명)</h3>";
    
    out += "<table class='list_box'>";
    
    for( var i=0; i<list.length; i++){
        out += "<tr>";
        
        out += "<td class='name'> <span>"+list[i]+"</span> </td>";
        out += "<td class='age'>"+(Math.floor(Math.random()*16 )+20 )+"</td>";
        var n= Math.floor(Math.random()*addr.length ) ;
        out += "<td class='addr'>"+addr[n]+"</td>";
    
        out += "</tr>";
    }
    
    out += "</table>";
    
    $("#section").html(out);
    }

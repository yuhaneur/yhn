// function addZero(num){

//         var result;
//         if(num < 10){
//             result = "0" + num;
//         }else{
//             result = num;
//         }
//         return result;
//     }
function addZZero(num){
    var result;
    if(num<10){
       result = "0"+ num;
    }else if(num<100){
        result = "00" + num;
    }else{
        result = num;
    }
    return result;
}
var clock= setInterval(function(){

        var now = new Date();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        // var msec = now.getSeconds();
        hour = addZZero(hour);
        min = addZZero(min);
        sec = addZZero(sec);
        // msec = addZZero(msec);
        var time = hour + ":" + min + ":" + sec; //+ ":" + msec;
        document.getElementById("box1").innerHTML=time;
    },20);
    

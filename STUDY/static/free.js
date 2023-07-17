// var text = ("안녕하세.요하하입니다");
// alert(text.indexOf("하")); // 하 는 몇번쨰순서에 있냐
// alert(text.charAt("4")); //4번째순서있는 글자는 뭐냐
// alert(text.substring(2,5));// 2부터 5전까지(4번쨰까지)의 글자는 무엇이냐
// alert (text.substr(2,6));

// var path="abc/fff/123/1234/eee.asfewf.aswdfajpg";
// var path =location.href; //중요
// path = path.split("/");  //  [/ ] 기준으로 단락을 나눔
// // var ext = path[path.length-1].split("."); //파일명 
// // ext = ext[ext.length-1]; //확장자
// alert( path );

function di(){
    return  Math.floor(Math.random()*6)+1;
}
var rdn=di();
alert(rdn);

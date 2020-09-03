$(document).ready(function () {
    //alert("doc2 ready");

var name;
var results=[];
var types=[];
var isFilled=[];
var websites=[
    "http://www.twitter.com/",
    "http://www.snapchat.com/add/", 
    "http://www.instagram.com/",
    "http://www.linkedin.com/in/",
    "http://www.tiktok.com/",
    "http://www.tumblr.com/"
]
function labelAccount(){
    document.getElementById("headerName").innerHTML=name+"'s";
    //alert("inside labelAccount")
    for (var i=0; i<types.length;i++){
        if(isFilled[i]){
     document.getElementById("result"+types[i]).innerHTML=results[i];
     var link = websites[i]+results[i];
     document.getElementById(types[i]+"link").setAttribute("href",link);
     document.getElementById(types[i]+"link").innerHTML = link;
        }
        else {
            $("."+types[i]+" img").css("filter", "brightness(20%)");
            $("."+types[i]+" h2").css("color", "#464646");
        };
    }
}

    function getvalue(){
       // alert("inside getvalue")

       name=localStorage.getItem("name");
        results = JSON.parse(localStorage.getItem("answers"));
        //alert("results: " + results)
        types = JSON.parse(localStorage.getItem("types"));
        //alert("types: " + types)
        isFilled = JSON.parse(localStorage.getItem("isFilled"));
        labelAccount();

    }
    getvalue();





});
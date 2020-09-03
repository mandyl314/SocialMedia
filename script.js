$(document).ready(function () {
   // alert("doc ready");

$("#next").hide();  
var answers=[];
var types = [
    'Twitter',
    'Snapchat',
    'Instagram',
    'Linkedin',
    'TikTok',
    'Tumblr'
]
var isFilled=[];
function storeAnswers(){
    for (var i=0; i<types.length;i++){
        answers.push($('#'+types[i]).val());
    }
}

function checkIsFilled(){
    //alert("inside checkIsFilled");
    for (var i=0; i<types.length;i++){
        if(answers[i].length==0){
            isFilled.push(false);
        }
        else{
            isFilled.push(true);
        }
    }
}

function passvalues(){
    //alert("inside passvalues")
    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("types", JSON.stringify(types));
    localStorage.setItem("isFilled",JSON.stringify(isFilled));
}

function storeName(){
    name = $('#Name').val();
    localStorage.setItem("name", name);
}


$("#next").click(function(){
    // alert("inside next.click")
    passvalues();
    //alert("back in next.click");
    location.href="newPage.html"
});

$("#create").click(function() {
    storeName();
   // alert("inside create")
    storeAnswers();
   // alert("inputs are " + answers);
    
    checkIsFilled();
   // alert("t/f " + isFilled);
$("#create").hide();
$("#next").show();

});


});


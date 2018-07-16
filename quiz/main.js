$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'speech.mp3');
    var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'websound1.mp3');
    var sumtingwong = $('input[value=sumting]');
    var sumtingrwite = $('input[name=q1][value=sumtingright]');
    var sumtingrwite2 = $('input[name=q2][value=sumtingright]');
    var negativecount=0;
    var count=2;
    var count2 = 0
    var rando = 21;
    var counttotal = 2;
    var retake = 0
    var scorenumber=["you didnt do shit dumb rass","good rob 100% A+", "u need to learn 0% F-", "u suck 50% F-"]
    if(retake == 1){
      $(sumtingwong).click(function () {
          alert("u suck maddafakka")
          negativecount--;
          if(negativecount<-1){
            alert("u dumb rass")
    }
    });
    $(sumtingrwite).click(function(){
        if(count == 0){
            alert("u very smart");
            count++;
        }
    });
    $(sumtingrwite2).click(function(){
        if(count2 == 0){
            alert("good rob");
            count2++;
        }
    });
}
  $(".sumtingwong").click(function () {
      if (rando == 21) {
          audioElement.play();
          rando++;
      }
  });
    $(".no").click(function(){
      var endingscore=0;
      if($('input[name=q1][value=sumtingright]:checked').length > 0){
      }
      if($('input[name=q2][value=sumtingright]:checked').length > 0){
      }
      if($('input[name=q1][value=sumting]:checked').length > 0){
        count--;
      }
      if($('input[name=q2][value=sumting]:checked').length > 0){
        count--;
      }
      if(count==0){
        endingscore=scorenumber[0];
      }
      if(count==2){
        endingscore=scorenumber[1];
      }
      if(count==1){
        endingscore=scorenumber[3];
      }
      if(count<=0){
        endingscore=scorenumber[2];
      }
      alert(count+' question(s) right');
      $("#finalscore").html("final score: " + endingscore);
    });
    $(".yes").click(function() {
        retake++;
    });
});

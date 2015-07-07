
$(document).ready(function(){

  // Managing text contents based on click
  
  $("#firstpara").on("click", function(){
    event.preventDefault();
    var first = "Our courses are engaging video summaries of textbook material. They are a fast, effective way to study for any subject and be better prepared for your next test. The lessons are short and concise, with lots of examples to help you master the material quickly.";

    $(".content").text(first);
  });

  $("#secondpara").on("click", function(){
    event.preventDefault();
    var second = "We've made earning real college credit simple — with no red tape to transfer credit units to over 2,000 colleges and universities. Our courses help unlock your potential and bring affordable college credit to millions of students.";

    $(".content").text(second);
  });

  $("#thirdpara").on("click", function(){
    event.preventDefault();
    var third = "Take as many courses as you like for one low monthly fee instead of paying expensive tuition and buying textbooks. Credits are transferable to over 2900 colleges & universities.";

    $(".content").text(third);
  });

  $("#forthpara").on("click", function(){
    event.preventDefault();
    var forth = "The Teacher Edition allows you to send all your students a unique link that grants them access to the video and its quiz. After students read or watch the assignment and take the quiz, you will automatically receive their quiz scores so you can see what they've learned and what they are struggling with.";

    $(".content").text(forth);
  });





});
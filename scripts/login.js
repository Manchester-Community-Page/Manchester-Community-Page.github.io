$(document).ready(function(){
  $(".login-form").hide();
  $(".login").css("background", "none");

  $(".login").click(function(){
    $(".signup-form").hide();
    $(".login-form").show();
    $(".signup").css("background", "none");
    $(".login").css("background", "#fff");
    $(".login-form").css("border-radius", "10px 0 10px 10px");
    $(".login-form").css("height", "300px");
  });

  $(".signup").click(function(){
    $(".signup-form").show();
    $(".login-form").hide();
    $(".login").css("background", "none");
    $(".signup").css("background", "#fff");
  });

  $(".btn").click(function(){
  $(".input").val("");
});
});

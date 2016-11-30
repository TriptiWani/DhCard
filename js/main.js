$(document).ready(function(){
  $('#first_name').on('keyup',function(){
    $("#name").html($(this).val());
    // $('.name_header').css({
    //   'padding':'10px'
    // });
  });
  $('#last_name').on('keyup',function(){
    var firstName = $("#first_name").val();
    $("#name").html(firstName+ ' ' + $(this).val());
    // $('.name_header').css({
    //   'padding':'10px'
    // });
  });
  $('#emailId').on('keyup',function(){
    $(".emailId").html($(this).val());
  });
  $('#phone').on('keyup',function(){
    $(".phoneNumber").html($(this).val());
  });
  $('#house_name').on('keyup',function(){
    $(".addressLine1").html($(this).val());
  });
  $('#street').on('keyup',function(){
    var houseName = $("#house_name").val();
    $(".addressLine1").html(houseName+ ' ' + $(this).val());
  });
  $('#suburb').on('keyup',function(){
    $(".addressLine2").html($(this).val());
  });
  $('#state').on('keyup',function(){
    var suburb = $("#suburb").val();
    $(".addressLine2").html(suburb+ ' ' + $(this).val());
  });
  $('#postcode').on('keyup',function(){
    $(".postCode").html($(this).val());
  });
  $('#country').on('keyup',function(){
    $(".countryName").html($(this).val());
  });

});

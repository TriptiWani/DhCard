$(document).ready(function(){
  // this function will update the target field with the value which is being typed in
  var updateContent = function(sourceVal,targetField){
      $(targetField).html(sourceVal);
  };
  //updating the first name
  $('form').on('keyup','#first_name',function(){
      updateContent($(this).val(),'#name');
      if($(this).val() !== ''){
        $('.name_header').removeClass('form-group');
      }else{
        $('.name_header').addClass('form-group');
      }
  });
  // Concatenating the last name
  $('form').on('keyup','#last_name',function(){
    var firstName = $("#first_name").val();
    $("#name").html(firstName+ ' ' + $(this).val());
  });

  // Updating the email id
  $('form').on('keyup','#emailId',function(){
      updateContent($(this).val(),'.emailId');
  });

  // updating the address Line1
  $('form').on('keyup','#house_name',function(){
      updateContent($(this).val(),'.addressLine1');
  });

  // Adding street details to the address
  $('form').on('keyup','#street',function(){
    var houseName = $("#house_name").val();
    $(".addressLine1").html(houseName+ ' ' + $(this).val());
  });

  // Adding suburb details to address Line2
  $('form').on('keyup','#suburb',function(){
      updateContent($(this).val(),'.addressLine2');
  });

  // adding phone number details
  $('form').on('keyup','#phone',function(){
      updateContent($(this).val(),'.phoneNumber');
  });

  // adding state details
  $('form').on('keyup','#state',function(){
    var suburb = $("#suburb").val();
    $(".addressLine2").html(suburb+ ' ' + $(this).val());
  });

  // adding postcode details
  $('form').on('keyup','#postcode',function(){
      updateContent($(this).val(),'.postCode');
  });

  // adding country details
  $('form').on('keyup','#country',function(){
      updateContent($(this).val(),'.countryName');
  });

  // updating the thumbnail image
  $('.avatar').on('click',function(){
    $('.preview_image').toggleClass('avatarUploaded');
  });



});

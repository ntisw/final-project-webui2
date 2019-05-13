$(document).ready(function() {
  $('.bg-login-image').css('background-image','url(https://images.pexels.com/photos/510848/pexels-photo-510848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)')

  $('#loginBtn').click(function(){
    $(this).attr("disabled","disabled");
    $('#labelLoading').toggleClass('sr-only');
    $('#labelLogin').toggleClass('sr-only');
    $('#loadingStatus').toggleClass('sr-only').toggle(800,function(){
        email=$('#inputEmail').val()
        pass=$('#inputPassword').val()
        if(email=='admin@nw.com'&&pass=='12345**'){
          setCookie('loginstatus','now',1)
          window.location.href='dashboard.html'
        }else{
          $('.invalid-feedback').show(0,function(){
            $('#divemail').effect('shake')
            $('#divpass').effect('shake')
          })
        }
        $('#loginBtn').removeAttr('disabled');
        $('#labelLoading').toggleClass('sr-only');
        $('#labelLogin').toggleClass('sr-only');
        $(this).toggle().toggleClass('sr-only');
    });
  });

  $('#inputEmail').keypress(function(){
    $('.invalid-feedback').hide()
  })
});

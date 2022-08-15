$(document).ready(function(){
    if($('#menuToggle').is(':checked')){
        $('html').addClass('ulhtml')
    }
    else{
        $('html').removeClass('ulhtml')
    }
})

/*START - SHOW & HIDE ALL TYPES OF MESSAGES*/
function ShowMessage(DivId, MsgType, MsgHeading, MsgText, MsgTimeout) {
    //alert(DivId + ',' + MsgType + ',' + MsgHeading + ',' + MsgText + ',' + MsgTimeout);
    $("#" + DivId).show();
    $("#" + DivId).addClass(MsgType);
    $("#SpnMsgHeader").text(MsgHeading);
    $("#SpnErrorMsg").html(MsgText);
    if (MsgTimeout == 0) {
        $("#" + DivId).show();
    }
    else {
        $("#" + DivId).fadeOut(MsgTimeout);
    }
}

function HideMessage(DivId) {
    //alert(DivId);
    $("#" + DivId).hide();
    $("#" + DivId).removeClass();
}
/*END - SHOW & HIDE ALL TYPES OF MESSAGES*/

$('.submit').click(function(){
    submit();
})
function submit(){
    var ErrMsg = '';
    if ($("#firstname").val().trim() == '') {
        ErrMsg += '<br/>-- Firstname.';
    }
    if ($("#lastname").val().trim() == '') {
        ErrMsg += '<br/>-- Lastname.';
    }
    if ($("#email").val().trim() == '') {
        ErrMsg += '<br/>-- Email.';
    }
    if ($("#message").val().trim() == '') {
        ErrMsg += '<br/>-- message.';
    }

    if (ErrMsg.length != 0) {
        ShowMessage('DivDisplayMsg', "alert alert-warning TextBlack", "You have some form errors. Please check below.", '<br/>' + ErrMsg, 0);
    }
    else {        
        $.blockUI({
            boxed: true,
            message: 'Processing...'
        });
        $.ajax({
            url: 'home',
            type:'POST',
            data: {
                firstname:$('#firstname').val(),
                lastname:$('#lastname').val(),
                email:$('#email').val(),
                message:$('#message').val(),
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
              },              
            success: function (data) {
                alert("hello")
                setTimeout($.unblockUI, 1000);
            //   HideToastrMsg();
            //   ShowToastrMsg("success", "toast-top-full-width", "Sent SuccessFully.", "", 5000);
              HideMessage("DivDisplayMsg");                                              
            },
          });   
    }
}
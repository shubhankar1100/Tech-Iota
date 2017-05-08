/**
 * open the url
 */
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

/**
 * send the mail to email address
 */
$(document).ready(function() {
    $('#send').click(function() {
        $('#form1').attr('action',
                       'mailto:shubhankarstar@gmail.com?subject=' +
                       $('#name').val() + '&body=' + $('#email').val() + $('#subject').val() + $('#txtArea').val());
        $('#form1').submit();
    });
});

/**
 * About card to have some 3d effect while mouse hover
 */
$(document).ready(function() {
	  $(".w3-card").hover(function(){ $(this).toggleClass('aboutCard'); });
	});

/**
 * Interview Question card to have some 3d effect while mouse hover
 */
$(document).ready(function() {
	  $(".interviewQuestion").hover(function(){ $(this).toggleClass('questionCard'); });
	});

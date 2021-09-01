// TOGGLER

$("#toggler").click(function () {
  $("#nav").slideToggle();
});

// *************************************************************************************************** \\

// TABS

var tab_nav = $('.nav-tab') // tab nav
var tab_content = $('.content') // tab content

// Dynamic classes
tab_content.each(function (i) {
  $(this).attr('id', 'tab-' + i);
})
tab_nav.children('li').children('a').each(function (i) {
  $(this).attr('href', '#tab-' + i)
})

// Show first tab
tab_content.hide();
tab_content.first().show();

// Click function
tab_nav.children('li').children('a').on('click', function () {
  tab_nav.children('li').removeClass('active');
  $(this).parent().addClass('active');
  var activeTab = $(this).attr('href');

  $(activeTab).siblings().hide().removeClass("active");
  $(activeTab).fadeIn().addClass("active")
});

// *************************************************************************************************** \\

// ACCORDION

var $question = $(".accordion__header"); // accordion opener
var $answer = $(".accordion__body"); // accordion content

$answer.hide();

$question.click(function () {
  $answer.slideUp();
  if ($(this).hasClass("open")) {
    $(this).removeClass("open").next($answer).slideUp();
  } else {
    $question.removeClass("open");
    $(this).addClass("open").next($answer).slideDown();
  }
});
$(function() {

  $("[data-vote]").parent().hover(function() {
    $(this).find("[data-vote]").removeClass('d-none')
  }, function() {
    $(this).find("[data-vote]").addClass('d-none')
  })
})

jQuery(function () {
  // Toggle menu
  jQuery('[data-toggle-menu]').click(function(e) {
    e.preventDefault()
    var menu = jQuery(jQuery(this).attr('data-toggle-menu'))

    menu.toggleClass('isActive')
  })

  // Next Section
  jQuery('[data-next-section]').click(function(event) {
    event.preventDefault()
    var button = jQuery(this)
    var section = jQuery('[data-section="'+ button.attr('data-next-section') + '"]').offset().top

    jQuery('html, body').animate({
      scrollTop: section
    }, 500)
  })

  // show newsletter error
  var form = document.querySelector('.section-five__form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    this.querySelector('.section-five__form__errors').classList.add('isActive')
  })
})

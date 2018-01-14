(function (win, doc) {
  // toggle menu
  var buttonMenu = doc.querySelector('[data-toggle-menu]')
  buttonMenu.addEventListener('click', function(e) {
    var menu = doc.querySelector(this.getAttribute('data-toggle-menu'))

    menu.classList.toggle('isActive')
  })

  // show newsletter error
  var form = doc.querySelector('.section-five__form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    this.querySelector('.section-five__form__errors').classList.add('isActive')
  })

})(window, document)

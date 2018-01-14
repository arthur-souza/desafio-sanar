(function (win, doc) {
  // toggle menu
  var buttonMenu = doc.querySelector('[data-toggle-menu]')
  buttonMenu.addEventListener('click', function(e) {
    var menu = doc.querySelector(this.getAttribute('data-toggle-menu'))

    menu.classList.toggle('isActive')
  })

})(window, document)

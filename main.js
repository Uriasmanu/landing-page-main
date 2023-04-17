function adjustStyle() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 500) {
    var linkElement = document.getElementById('style-desktop');
    if (linkElement) {
      linkElement.parentNode.removeChild(linkElement);
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = 'style-mobile';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'mobile.css';
    head.appendChild(link);
  } else {
    var linkElement = document.getElementById('style-mobile');
    if (linkElement) {
      linkElement.parentNode.removeChild(linkElement);
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = 'style-desktop';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css';
    head.appendChild(link);
  }
}

window.onload = adjustStyle;
window.onresize = adjustStyle;



    // verifica o tamanho da tela no início do carregamento da página
    window.dispatchEvent(new Event('resize'));
var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function (dropdown) {
  dropdown.addEventListener('mouseover', function () {
    var submenu = dropdown.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = 'block';
    }
  });
  dropdown.addEventListener('mouseout', function () {
    var submenu = dropdown.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = 'none';
    }
  });
});

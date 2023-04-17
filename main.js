function trocarEstilo() {
  var largura = window.innerWidth;
  var estilo = document.getElementById("estilo");

  if (largura < 500) {
    estilo.href = "mobile.css";
  } else {
    estilo.href = "style.css";
  }

  if (largura < 500 && estilo.href.includes("mobile.css")) {
    estilo.disabled = true;
  } else {
    estilo.disabled = false;
  }
}

window.addEventListener("load", trocarEstilo);
window.addEventListener("resize", trocarEstilo);


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

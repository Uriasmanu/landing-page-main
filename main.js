function mudarEstilo() {
  var estilo = document.querySelector("link[href='style.css']");
  var mobileEstilo = document.querySelector("link[href='mobile.css']");
  
  if (/Mobi|Android/i.test(navigator.userAgent)) { // Verifica se é um dispositivo móvel
    estilo.disabled = true; // Desabilita o estilo padrão
    mobileEstilo.disabled = false; // Habilita o estilo para dispositivos móveis
  } else {
    estilo.disabled = false; // Habilita o estilo padrão
    mobileEstilo.disabled = true; // Desabilita o estilo para dispositivos móveis
  }
}

// Chama a função para mudar o estilo quando a página é carregada e quando o tamanho da janela é alterado
window.addEventListener("load", mudarEstilo);
window.addEventListener("resize", mudarEstilo);




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

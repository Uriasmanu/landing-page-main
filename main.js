function mudarEstilo() {
  var estilo = document.querySelector("link[href='style.css']");
  var mobileEstilo = document.querySelector("link[href='mobile.css']");
  
  if (/Mobi|Android/i.test(navigator.userAgent)) { // Verifica se é um dispositivo móvel
    estilo.disabled = true; // Desabilita o estilo padrão
    mobileEstilo.disabled = false; // Habilita o estilo para dispositivos móveis

    var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {
  var submenu = dropdown.querySelector('.submenu');

  // Adicionar evento de clique no item do menu
  dropdown.addEventListener('click', function () {
    if (submenu) {
      // Alternar o estado do menu suspenso
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
      } else {
        submenu.style.display = 'block';
      }
    }
  });

  // Adicionar evento de redimensionamento da janela para ocultar o menu em telas menores
  window.addEventListener('resize', function () {
    if (window.innerWidth < 768 && submenu) {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  });
});

  } else {
    estilo.disabled = false; // Habilita o estilo padrão
    mobileEstilo.disabled = true; // Desabilita o estilo para dispositivos móveis

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
  }
}

// Chama a função para mudar o estilo quando a página é carregada e quando o tamanho da janela é alterado
window.addEventListener("load", mudarEstilo);
window.addEventListener("resize", mudarEstilo);






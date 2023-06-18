const themeToggler = document.querySelector('#theme-toggler');
const htmlElement = document.querySelector('html');

themeToggler.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-theme');
    themeToggler.classList.toggle('#theme-toggler');
});

function increaseFontSize() {
    // Obtém o elemento <html>
    var htmlElement = document.getElementsByTagName('html')[0];
    
    // Obtém o valor atual da propriedade de tamanho de fonte
    var currentFontSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
    
    // Aumenta o tamanho da fonte em 1 pixel
    var newFontSize = currentFontSize + 1;
    
    // Define o novo tamanho da fonte
    htmlElement.style.fontSize = newFontSize + 'px';
  }

  function passwordPopup() {
    swal({
        title: "Olá!",
        text: "Uma menssagem de confirmação foi enviada para o e-mail acima.",
        icon: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      });
}


function submitPopup() {
    swal({
        title: "Você está logado!",
        icon: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      });
}
  
  
  
  
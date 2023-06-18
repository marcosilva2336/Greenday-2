const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Mostrar sidebar
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

// Fechar sidebar
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

// Mudar theme 
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


  

// ordem tabela
Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
    <td>${order.Cliente}</td>
    <td>${order.Rastreamento}</td>
    <td>${order.Pagamento}</td>
    <td class="${order.Status === 'Cancelado' ? 'danger' : order.Status === 'Pendente' ? 'warning' : 'success'}">${order.Status}</td>
    <td class="primary">Detalhes</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);

  
});

// Funções de envio de mensagem e reporte
function enviarMensagem(mensagem) {
  // Adicione a lógica para enviar a mensagem aqui
  console.log('Menssagem enviada:', mensagem);
}

function enviarReporte(reporte) {
  // Adicione a lógica para enviar o reporte aqui
  console.log('Reporte enviado:', reporte);
}

document.querySelector("a[href='#mensagens']").addEventListener('click', function(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Enviar Menssagem',
    input: 'text',
    inputPlaceholder: 'Digite sua mensagem aqui',
    confirmButtonText: 'Enviar',
    preConfirm: enviarMensagem
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Enviada!', 'Sua menssagem foi enviada.', 'success');
    }
  });
});

document.querySelector("a[href='#reportes']").addEventListener('click', function(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Enviar Reporte',
    input: 'text',
    inputPlaceholder: 'Digite seu reporte aqui',
    confirmButtonText: 'Enviar',
    preConfirm: enviarReporte
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Enviado!', 'Seu reporte foi enviado.', 'warning');
    }
  });
});

document.querySelector("a[href='#logout']").addEventListener('click', function(e) {
  e.preventDefault();
  Swal.fire({
    title: 'tem certeza que quer sair?',
    icon: 'question',
    showDenyButton: true,
    confirmButtonText: `Sim`,
    denyButtonText: `Não`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Feito! Você foi deslogado com sucesso!.');
    }
  });
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

// Seleciona o elemento <a> pelo id
var linkElement = document.getElementById('increaseFontLink');

// Adiciona um ouvinte de evento de clique ao elemento <a>
linkElement.addEventListener('click', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  increaseFontSize(); // Chama a função increaseFontSize()
});






const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.theme-toggle');

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode-variables');
  darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
  darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
      <td>${order.NomeVeiculo}</td>
      <td>${order.Placa}</td>
      <td>${order.Seguro}</td>
      <td class="${order.status === 'Recusado' ? 'danger' : order.status === 'Pendente' ? 'warning' : 'primary'}">${order.status}</td>
      <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});
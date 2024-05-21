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

Report.forEach(reports => {
  const tr = document.createElement('tr');
  const trContent = `
      <td>${reports.ID}</td>
      <td>${reports.Motivo}</td>
      <td>${reports.Usuario}</td>
      <td class="${reports.status === 'Pendente' ? 'danger' : reports.status === 'Concluido' ? 'success' : reports.status === 'Em Andamento' ? 'warning' : 'primary'}">${reports.status}</td>
      <td class="primary">Detalhes</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});
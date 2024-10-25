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
    toggle_dark_mode();
})



function toggle_dark_mode() {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    let darkmode = document.body.classList.contains('dark-mode-variables');
    setCookie("darkmode", darkmode ? "1" : "0", 999)
}

if (getCookie('darkmode') == "1") {
    toggle_dark_mode()
}

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
      <td>${order.NomeVeiculo}</td>
      <td>${order.Placa}</td>
      <td>${order.Usuario}</td>
      <td class="${order.status === 'Recusado' ? 'danger' : order.status === 'Aceito' ? 'success' : order.status === 'Pendente' ? 'warning' : 'primary'}">${order.status}</td>
      <td class="primary">Detalhes</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

// gerenciar cookies - não editar
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1, c.length); if
            (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    } return null;
}
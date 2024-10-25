Tickets.forEach(tickets => {
    const tr = document.createElement('tr');
    const trContent = `
      <td>${tickets.ID}</td>
      <td>${tickets.Motivo}</td>
      <td>${tickets.Requerente}</td>
      <td class="${tickets.status === 'Pendente' ? 'danger' : tickets.status === 'Concluido' ? 'success' : tickets.status === 'Em Andamento' ? 'warning' : 'primary'}">${tickets.status}</td>
      <td class="primary">Detalhes</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
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
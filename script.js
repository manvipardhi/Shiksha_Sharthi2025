// Tabs
function showSection(id) {
  document.querySelectorAll('.tab-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  document.querySelector(`.tab[onclick="showSection('${id}')"]`).classList.add('active');
}

const toggleBtn = document.querySelector('.theme-toggle i');
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.classList.toggle('fa-toggle-on');
  toggleBtn.classList.toggle('fa-toggle-off');
});


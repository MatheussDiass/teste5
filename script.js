// Adicionando evento de hover ao footer
document.getElementById('footer').addEventListener('mouseover', () => {
    document.getElementById('footer').style.bottom = '0';
  });
  
  document.getElementById('footer').addEventListener('mouseout', () => {
    document.getElementById('footer').style.bottom = '-50px';
  });
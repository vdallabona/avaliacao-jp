document.addEventListener('DOMContentLoaded', () => {
    const comentInput = document.getElementById('coment-input');
    const addButton = document.getElementById('add-button');
    const comentList = document.getElementById('coment-list');
  
    addButton.addEventListener('click', addcoment);
  
    comentInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addcoment();
      }
    });
  
    function addcoment() {
      const comentText = comentInput.value;
      if (comentText == 'feio' || comentText == 'ruim' || comentText == 'horrivel'){
        alert("Não faça isso, vai magoar ele.");
      }else if (comentText !== '') {
        const li = document.createElement('li');
        li.textContent = comentText;

        comentList.appendChild(li);
        comentInput.value = '';
      }
      
    }
  });
  
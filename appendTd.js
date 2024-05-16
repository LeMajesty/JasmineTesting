function appendTd(tr, value) {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  }
  
 
  function appendDeleteBtn(tr) {
    const td = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function() {

      tr.remove();
    });
    td.appendChild(deleteBtn);
    tr.appendChild(td);
  }
  
  module.exports = {
    appendTd,
    appendDeleteBtn
  };
  
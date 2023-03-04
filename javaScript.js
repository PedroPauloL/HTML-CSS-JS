let data = [];

function create(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let item = {$name: name, email: email, telefone: telefone};
  data.push(item);
  document.getElementById('table-body').innerHTML += '<tr><td>' + name + '</td><td>' + email + '</td><td>' + telefone + '</td><td><button onclick="update(event)">Editar</button><button onclick="remove(event)">Excluir</button></td></tr>';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = ''
}

function update(event) {
  event.preventDefault();
  let row = event.target.parentNode.parentNode;
  let name = row.childNodes[0].textContent;
  let email = row.childNodes[1].textContent;
  let telefone = row.childNodes[2].textContent;
  let newName = prompt('Digite um novo nome:', name);
  let newEmail = prompt('Digite um novo email:', email);
  let newTelefone = prompt('Digite um novo telefone:', telefone);
  row.childNodes[0].textContent = newName;
  row.childNodes[1].textContent = newEmail;
  row.childNodes[2].textContent = newTelefone;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name && data[i].email === email && data[i].telefone === newTelefone) {
      data[i].name = newName;
      data[i].email = newEmail;
      data[i].telefone = newTelefone;;
      break;
    }
  }
}

function remove(event) {
  event.preventDefault();
  let row = event.target.parentNode.parentNode;
  let name = row.childNodes[0].textContent;
  let email = row.childNodes[1].textContent;
  let telefone = row.childNodes[2].textContent;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name && data[i].email === email && data[i].telefone === telefone) {
      data.splice(i, 1);
      break;
    }
  }
  row.remove();
}





let students = [
  {
    name: 'Joe'
  },
  {
    name: 'Bob'
  },
  {
    name: 'Bill'
  },
  {
    name: 'Doug'
  }
];

const printStudent = () => {
  const newStudent = {};
  newStudent.name = document.getElementById('name').value
  document.getElementById
  students.push(newStudent);
  domStringBuilder(students);

  document.getElementById('name').value = '';
}

const domStringBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card">`;
    domString += `<h3>${item.name}</h3>`;
    domString += `<button id=${item.name}>Expel</button>`
    domString += `</div>`;
  })
  printToDom('sorting-hat', domString);
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const eventListeners = () => {
  document.getElementById('sort').addEventListener('click', printStudent);
}

const init = () => {
  domStringBuilder(students);
  eventListeners();
}

init()
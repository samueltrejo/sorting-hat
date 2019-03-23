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

const expelStudent = (event) => {
  let newArray = [];
  students.forEach((student) => {
    if(student.name !== event.target.id) {
      newArray.push(student); 
    }
  })
  students = newArray;
  domStringBuilder(students);
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
  array.forEach((item) => {
    expelEventListeners(item.name);
  })
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const expelEventListeners = (element) => {
  document.getElementById(element).addEventListener('click', expelStudent);
}

const eventListeners = () => {
  document.getElementById('sort').addEventListener('click', printStudent);
}

const init = () => {
  domStringBuilder(students);
  eventListeners();
}

init()
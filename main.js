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
  },
  {
    name: 'Candace'
  },
  {
    name: 'Brittany'
  },
  {
    name: 'Ashley'
  },
  {
    name: 'Mary'
  },
];

const sorteo = (array) => {
  let sortArray = [];
  let newArray = [];
  let index = 0;
  array.forEach((item) => {
    sortArray.push(item.name + `${index}`);
    index++;
  })
  sortArray.sort()
  sortArray.forEach((name) => {
    newArray.push(students[name[name.length -1]])
  })
  students = newArray;
}

const onLoad = () => {
  students.forEach((student) => {
    student.house = randomHouse();
  })
}

const errorCheck = (value) => {
  let alert = '';
  let errorCode = false;
  if(value.length === 0) {
    alert = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Whoops!</strong> Looks like you forgot to enter your name.
    </div>`
    printToDom('alert-container', alert)
    errorCode = true;
  } else if (!/^[a-zA-Z]*$/g.test(value)) {
    alert = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Whoops!</strong> Looks like you entered an invalid character.
    </div>`
    printToDom('alert-container', alert)
    errorCode = true;
  } else if (errorCode === false) {
    students.forEach((student) => {
      if(value === student.name) {
        alert = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Whoops!</strong> Looks looks like are already signed up.
        </div>`
        printToDom('alert-container', alert)
        errorCode = true;
      }
    })
  }
  return errorCode
}

const randomHouse = () => {
  let houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  const randomNum = Math.floor(Math.random() * 4);
  return houses[randomNum]
}

const printStudent = () => {
  const newStudent = {};
  newStudent.name = document.getElementById('name').value
  const errorCode = errorCheck(newStudent.name)
  if (errorCheck(newStudent.name) === false) {
    newStudent.house = randomHouse()
    document.getElementById
    students.push(newStudent);
    sorteo(students);
    determineHouseDiv(students);
    $('#form-modal').modal('hide');
  }
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
  sorteo(students);
  determineHouseDiv(students);
}

const determineHouseDiv = (array) => {
  let gryf = [];
  let slyth = [];
  let rav = [];
  let huff = [];
  array.forEach((item) => {
    if(item.house === 'Gryffindor') {
      gryf.push(item)
    }
    if(item.house === 'Slytherin') {
      slyth.push(item)
    }
    if(item.house === 'Ravenclaw') {
      rav.push(item)
    }
    if(item.house === 'Hufflepuff') {
      huff.push(item)
    }
  })
  domStringBuilder(gryf, 'Gryffindor');
  domStringBuilder(slyth, 'Slytherin');
  domStringBuilder(rav, 'Ravenclaw');
  domStringBuilder(huff, 'Hufflepuff');
}

const domStringBuilder = (array, divId) => {
  let domString = '';
  domString += `<div class="row"><h3 style="color: white;">${divId}</h3></div>`
  array.forEach((item) => {
    domString += `<div class="card ${item.house} row">`;
    domString += `<h3>${item.name}</h3>`;
    domString += `<h4>${item.house}</h4>`
    domString += `<button id=${item.name} class="btn btn-primary ${item.house}-btn">Expel</button>`
    domString += `</div>`;
    // printToDom(item.house, domString);
  })
  printToDom(divId, domString);
  array.forEach((item) => {
    expelEventListeners(item.name);
  })
}

const hideAlert = (event) => {
  if(event.target.id !== 'sort') {
    $('.alert').alert('close');
  }
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
  document.getElementById('modal-x').addEventListener('click', hideAlert);
  document.getElementById('form-modal').addEventListener('click', hideAlert);
}

const init = () => {
  sorteo(students);
  onLoad();
  determineHouseDiv(students);
  eventListeners();
}

init()
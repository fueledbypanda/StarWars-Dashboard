// http://star-cors.herokuapp.com/films
// http://star-cors.herokuapp.com/people
// http://star-cors.herokuapp.com/starships
// http://star-cors.herokuapp.com/vehicles
const filmTitle = document.getElementById("title");
const peopleName = document.getElementById("peeps");
const shipName = document.getElementById("spaceboat");
const vehicleName = document.getElementById("whips");

async function getFilmName() {
  const response = await axios.get(`http://star-cors.herokuapp.com/films`);
  renderFilms(response);
}

getFilmName();

function renderFilms(data) {
  let titleArr = data.data.results;
  for (let i = 0; i < titleArr.length; i++) {
    filmTitle.innerHTML += `<div class="card m-2" style="width: 18rem; border-radius: 25px; list-style-type: none;"">
        <div class="card-body">
          <h5 class="card-title">${titleArr[i].title}</h5>
          <p class="card-text">Released on ${titleArr[i].release_date}</p>
         
        </div>
      </div>`;
  }
}

function searchFilms() {
  let input = document.getElementById("searchbar2").value;
  input = input.toLowerCase();
  let x = document
    .getElementsByClassName("films")[0]
    .getElementsByClassName("card-title");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].parentNode.parentNode.style.display = "none";
    } else {
      x[i].parentNode.parentNode.style.display = "list-item";
    }
  }
}

async function getPeopleName() {
  const response = await axios.get(`http://star-cors.herokuapp.com/people`);
  const response2 = await axios.get(
    `http://star-cors.herokuapp.com/people/?page=2`
  );
  renderPeopleName(response);
  renderPeopleName(response2);
}

getPeopleName();

function renderPeopleName(data) {
  let peopleArr = data.data.results;
  console.log(peopleArr);
  for (let i = 0; i < 1; i++) {
    peopleName.innerHTML += `<div class="displayNumber">Displaying  ${peopleArr.length} of ${data.data.count} People</div>`;
  }
  for (let i = 0; i < peopleArr.length; i++) {
    peopleName.innerHTML += `
    <div class="card m-2" style="width: 18rem; border-radius: 25px; list-style-type: none;">
    <div class="card-body">
      <h5 class="card-title">${peopleArr[i].name}</h5>
      <p class="card-text">Appeared in ${peopleArr[i].films.length} films.</p>
     
    </div>
  </div>`;
  }
}
function searchPeople() {
  let input = document.getElementById("searchbar1").value;
  input = input.toLowerCase();
  let x = document
    .getElementsByClassName("people")[0]
    .getElementsByClassName("card-title");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].parentNode.parentNode.style.display = "none";
    } else {
      x[i].parentNode.parentNode.style.display = "list-item";
    }
  }
}

async function getShipName() {
  const response = await axios.get(`http://star-cors.herokuapp.com/starships`);
  renderShipName(response);
}

getShipName();

function renderShipName(data) {
  let shipArr = data.data.results;
  for (let i = 0; i < shipArr.length; i++) {
    shipName.innerHTML += `<div class="card m-2" style="width: 18rem; border-radius: 25px; list-style-type: none;">
    <div class="card-body">
      <h5 class="card-title">${shipArr[i].name}</h5>
      <p class="card-text">${shipArr[i].model} films.</p>
     
    </div>
  </div>`;
  }
}

function searchStarship() {
  let input = document.getElementById("searchbar3").value;
  input = input.toLowerCase();
  let x = document
    .getElementsByClassName("starships")[0]
    .getElementsByClassName("card-title");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].parentNode.parentNode.style.display = "none";
    } else {
      x[i].parentNode.parentNode.style.display = "list-item";
    }
  }
}

async function getVehicleName() {
  const response = await axios.get(`http://star-cors.herokuapp.com/vehicles`);
  renderVehicleName(response);
}

getVehicleName();

function renderVehicleName(data) {
  let vehicleArr = data.data.results;
  for (let i = 0; i < vehicleArr.length; i++) {
    vehicleName.innerHTML += `<div class="card m-2" style="width: 18rem; border-radius: 25px; list-style-type: none;">
    <div class="card-body">
      <h5 class="card-title">${vehicleArr[i].name}</h5>
      <p class="card-text">Made by ${vehicleArr[i].manufacturer} films.</p>
     
    </div>
  </div>`;
  }
}

function searchVehicle() {
  let input = document.getElementById("searchbar4").value;
  input = input.toLowerCase();
  let x = document
    .getElementsByClassName("vehicles")[0]
    .getElementsByClassName("card-title");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].parentNode.parentNode.style.display = "none";
    } else {
      x[i].parentNode.parentNode.style.display = "list-item";
    }
  }
}

// create a function to renderfilms
// get titles of films

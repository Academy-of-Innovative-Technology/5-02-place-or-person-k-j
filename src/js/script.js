let data = [];

// WAIT until page loads
document.addEventListener("DOMContentLoaded", function () {
  loadData();
  setupEvents();
});

// LOAD JSON
async function loadData() {
  try {
    const response = await fetch("src/api/data.json");
    const json = await response.json();

    data = json.results;

    console.log("DATA LOADED:", data);

    // Populate dropdown
    populateDropdown();

    // Show first item
    if (data.length > 0) {
      displayProfile(data[0]);
    }

  } catch (error) {
    console.error("FETCH ERROR:", error);
  }
}

// FUNCTION 1: POPULATE DROPDOWN
function populateDropdown() {
  const dropdown = document.getElementById("dropdown");

  data.forEach(item => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = `${item.name} (${item.type})`;
    dropdown.appendChild(option);
  });
}

// FUNCTION 2: SEARCH
function searchProfile(name) {
  return data.find(item =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
}

// FUNCTION 3: DISPLAY
function displayProfile(item) {
  const output = document.getElementById("output");

  if (!item) {
    output.innerHTML = "<h3 style='color:red'>No results found</h3>";
    return;
  }

  // LOCATION
  if (item.type === "location") {
    output.innerHTML = `
      <div class="card">
        <h2>${item.name}</h2>

        <img src="${item.images.flag}" style="width:150px">

        <p><b>Population:</b> ${item.population}</p>
        <p><b>Capital:</b> ${item.capital}</p>
        <p><b>National Animal:</b> ${item.national_animal}</p>
        <p><b>Languages:</b> ${item.language.join(", ")}</p>

        ${item.anthem ? `<audio controls src="${item.anthem}"></audio>` : ""}

        <div class="gallery">
          ${item.images.gallery.map(img => `<img src="${img}">`).join("")}
        </div>
      </div>
    `;
  }

  // PERSON
  else {
    output.innerHTML = `
      <div class="card">
        <h2>${item.name}</h2>

        <img src="${item.images.person}" style="width:150px">

        <p><b>Birth Date:</b> ${item.birth_date}</p>
        <p><b>Born In:</b> ${item.born_in}</p>
        <p><b>Background:</b> ${item.background.join(", ")}</p>
        <p><b>Parents:</b> ${item.parents.join(", ")}</p>
        <p><b>Education:</b> ${item.education.join(", ")}</p>

        <div class="gallery">
          ${item.images.gallery.map(img => `<img src="${img}">`).join("")}
        </div>
      </div>
    `;
  }

  console.log(Object.keys(item));
  console.log(Object.values(item));
}

// FUNCTION 4: EVENTS
function setupEvents() {
  const input = document.getElementById("searchInput");
  const dropdown = document.getElementById("dropdown");

  // Typing search
  input.addEventListener("keyup", function () {
    const result = searchProfile(this.value);
    displayProfile(result);
  });

  // Dropdown select
  dropdown.addEventListener("change", function () {
    const result = searchProfile(this.value);
    displayProfile(result);
  });
}
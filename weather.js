var cityEl = $("#city-form");
var cityLi = $("#city-list");
var searchBtn = $("#search-btn");

// var cityItem = $("#city-input");

// cityItem.textContent = "(cityItem)";
// cityLi.append(cityItem);

function searchCity(event) {
  event.preventDefault();

  var cityItem = $("#city-input").val();
  cityItem.text(cityItem);
  cityLi.append(cityItem);
}

searchBtn.addEventListener("click", searchCity());

/* let html = document.getElementsByName("mo").innerHTML;
console.log(html)
async function getdata(ro = `paris`) {
  let city = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=98e8778e13354f138f5155304241301&q=${ro}`
  );
  let futureDate = ` mon                                                          15January`;

  let hif = ` thu                                                 16jan`;
  let cityja = await city.json();

  let cityname = cityja.location.name;
  let time = cityja.location.localtime;
  let today = cityja.current.is_day;
  let tom = cityja.current.temp_f;
  let yas = cityja.current.temp_c;
  let ko = cityja.current.condition.text;

  document.getElementById(`we`).innerHTML = `<div class="col-lg-4 g-0">
          <div class="card h-100 pl fw-bold ">
            <p>${new Date(time)}</p>
            <div class="card-body">
                <h4 class="card-title">${cityname}</h4>
                <p class="card-text">${today}</p>
                <p>${ko}</p>
            </div>
          </div>
          
        </div>
        <div class="col-lg-4 g-0">
          <div class="card h-100 pl fw-bold">
            <p> ${futureDate}</p>
            <div class="card-body">
                <h4 class="card-title">${yas}</h4>
                <p class="card-text">${ko}</p>
            </div>
          </div>
          
        </div>
        <div class="col-lg-4 g-0">
          <div class="card h-100 pl fw-bold">
            <p>${hif}</p>
            <div class="card-body">
                <h4 class="card-title">${tom}</h4>
                <p class="card-text">${ko}</p>
            </div>
          </div>
          
        </div>`;

}
getdata();

document.getElementById(`lo`).addEventListener(`click`, async function () {
  let city = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=98e8778e13354f138f5155304241301&q=${yo}`
  );
  let futureDate = ` mon                                                          15January`;

  let hif = ` thu                                                 16jan`;
  let cityja = await city.json();

  let cityname = cityja.location.name;
  let time = cityja.location.localtime;
  let today = cityja.current.is_day;
  let tom = cityja.current.temp_f;
  let yas = cityja.current.temp_c;
  let ko = cityja.current.condition.text;

  document.getElementById(`we`).innerHTML = `<div class="col-lg-4 g-0">
          <div class="card h-100 pl fw-bold ">
            <p>${new Date(time)}</p>
            <div class="card-body">
                <h4 class="card-title">${cityname}</h4>
                <p class="card-text">${today}</p>
                <p>${ko}</p>
            </div>
          </div>
          
        </div>
        <div class="col-lg-4 g-0">
          <div class="card h-100 pl fw-bold">
            <p> ${futureDate}</p>
            <div class="card-body">
                <h4 class="card-title">${yas}</h4>
                <p class="card-text">${ko}</p>
            </div>
          </div>
          
        </div>
        <div class="col-lg-4 g-0">
          <div class="card h-100 pl fw-bold">
            <p>${hif}</p>
            <div class="card-body">
                <h4 class="card-title">${tom}</h4>
                <p class="card-text">${ko}</p>
            </div>
          </div>
          
        </div>`;
});

let vf =document.getElementsByTagName(`a`)

for(let i ; i < vf.length ; i++){
    vf[i].addEventListener(`click`, function(e){

        let ty = e.target

        ty.addclass(`active`)
    })
}
 */
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let data = [];

searchInput.addEventListener("input", function () {
  let cityValue = searchInput.value;
  searchWeather(cityValue);
});

searchButton.addEventListener("click", function () {
  let cityValue = searchInput.value;
  searchWeather(cityValue);
});

searchWeather();

async function searchWeather(cityName = "paris") {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=a56ba2720477483687e200910241301&q=${cityName}&days=3`
  );
  let finalResponse = await response.json();
  data = finalResponse;
  displayData(cityName);
}

async function displayData(city) {
  var d = new Date();
  let days = d.toLocaleDateString("en-us", { weekday: "long" });
  let daysnumber = d.getDate();
  let months = d.toLocaleDateString("en-us", { month: "long" });
  d.setDate(d.getDate() + 1);
  let tomorrowDays = d.toLocaleDateString("en-us", { weekday: "long" });
  d.setDate(d.getDate() + 1);
  let afterTomorrowDays = d.toLocaleDateString("en-us", { weekday: "long" });
  data.location.name = city;

  let todayCol = `
        <div class="card vhk h-100 fw-bolder">
        <div class="card-header d-flex justify-content-between  ">
        <small class=" day-text text-white text-opacity-50">${days}</small>
        <small class="month-text text-white text-opacity-50"><span class="day-number">${daysnumber}</span> ${months}</small>
        </div>
        <div class="card-body">
        <h5 class="pb-4 card-title city text-capitalize"> ${city} </h5>
        <div class="deg  d-flex align-items-center justify-content-around">
        <p class="card-text deg-number"> ${data.current.temp_c}° C</p>
        </div>
        <h6 class="deg-info">${data.current.condition.text}</h6>
        </div>
        <div class="card-footer">
        <div class="temperatures d-flex justify-content-around">
            <span><i class="fa-solid fa-umbrella"></i> ${data.current.humidity} %</span>
            <span><i class="fa-solid fa-wind"></i> ${data.current.wind_kph} k/h</span>
            <span><i class="fa-solid fa-compass"></i> ${data.current.wind_dir} </span>
        </div>
        </div>
    </div>
    `;
  let tomorrowCol = `
    <div class="card vhk h-100">
    <div class="card-header text-center  ">
    <small class="day-text text-white text-opacity-50">${tomorrowDays}</small>
    </div>
    <div class="card-body">
    <div class="deg  d-flex flex-column align-items-center justify-content-around">
    <small class=" card-text deg-number"> ${data.forecast.forecastday[1].day.maxtemp_c}° C</small>
    <p class=" card-text deg-number"> ${data.forecast.forecastday[1].day.mintemp_c}° C</p>
    <h6 class="text-center deg-info">${data.forecast.forecastday[1].day.condition.text}</h6>
    </div>
    </div>
</div>
    `;
  let afterTomorrowCol = `
    <div class="card vhk g-0">
    <div class="card-header text-center  ">
    <small class="day-text text-white text-opacity-50">${afterTomorrowDays}</small>
    </div>
    <div class="card-body">
    <div class="deg  d-flex flex-column align-items-center justify-content-around">
    <small class=" card-text deg-number"> ${data.forecast.forecastday[2].day.maxtemp_c}° C</small>
    <p class=" card-text deg-number"> ${data.forecast.forecastday[2].day.mintemp_c}° C</p>
    <h6 class="text-center deg-info">${data.forecast.forecastday[2].day.condition.text}</h6>
    </div>
    </div>
</div>
    `;

  document.querySelector(".today").innerHTML = todayCol;
  document.querySelector(".tomorrow").innerHTML = tomorrowCol;
  document.querySelector(".after-tomorrow").innerHTML = afterTomorrowCol;
}
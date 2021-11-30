// setting up API Connection

// API CALLING : https://github.com/robertoduessmann/weather-api

// AJAX //

// $.ajax({
//   url:"https://goweather.herokuapp.com/weather/California",
//   success: function (weather){
//     console.log(weather);
//   },
//   error: function (error){
//     console.log("bad Req: ", error);
//   },
// })

// PROMIESES //

// const promise = $.ajax({
//   url:"https://goweather.herokuapp.com/weather/California",
// });

// // like an object holding the request event
// // .then() method success call back and error call back

// promise.then(
//   (data) => {
//     console.log(data)
//   },
//   (error) => {
//     console.log("Bad Bad ", error)
//   },
// )

// Simple way //

// $("form").on("submit", (event) => {
//   event.preventDefault();
//   const userInput = $('input[type="text"]').val();
//   $.ajax({
//     url: "https://goweather.herokuapp.com/weather/" + userInput,
//   }).then(
//     (weather) => {
//       $("#temp").html(weather.temperature);
//       $("#des").html(weather.description);
//       $("#forecast").html(weather.forecast[0].day);
//       $("#forecast").html(weather.forecast[0].temperature);
//       console.log(weather);
//     },
//     (error) => {
//       console.log("bad bad", error);
//     }
//   );
// });

// Async/Await //

async function getWeatherData(e) {
  e.preventDefault();
  const userInput = $('input[type="text"]').val();
  const url = `https://goweather.herokuapp.com/weather/ + ${userInput}`;
  const response = await fetch(url);
  const weather = await response.json();
  $("#temp").html(weather.temperature);
  $("#des").html(weather.description);
  // for (i=0; i < $(weather.forecast).length; i ++){
  //   $("#forecast").html(i)
  // };
  // $("#forecast").html(weather.forecast).each(function (e){
  //   $(this).html(e)
  // });
  // $("#forecast").html(weather.forecast[0].day);
  $("#day").html("Day: "+ weather.forecast[0].day);
  $("#wind").html("Wind: "+weather.forecast[0].wind);
  $("#temperature").html("Temp: "+weather.forecast[0].temperature);
  console.log(weather);
}

$("form").on("submit", getWeatherData);

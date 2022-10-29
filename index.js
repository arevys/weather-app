let weather = [
  {
    city: "paris",
    temp: 19.7,
    humidity: 80
  },
  {
    city: "tokyo",
    temp: 17.3,
    humidity: 50
  },
  {
    city: "lisbon",
    temp: 30.2,
    humidity: 20
  },
  {
    city: "san francisco",
    temp: 20.9,
    humidity: 100
  },
  {
    city: "oslo",
    temp: -5,
    humidity: 20
  }
];


console.log(weather);

let question = prompt("Enter a city");
if (question === weather[0].city) {
  alert(
    `It is currently ${Math.round(weather[0].temp)}º (${Math.round(
      (weather[0].temp * 9) / 5 + 32
    )}ºF) in ${weather[0].city} with a humidity of ${weather[0].humidity}%`
  );
} else if (question === weather[1].city) {
  alert(
    `It is currently ${Math.round(weather[1].temp)} (${Math.round(
      (weather[1].temp * 9) / 5 + 32
    )}ºF) in ${weather[1].city} with a humidity of ${weather[1].humidity}%`
  );
} else if (question === weather[2].city) {
  alert(
    `It is currently ${Math.round(weather[2].temp)} (${Math.round(
      (weather[2].temp * 9) / 5 + 32
    )}ºF) in ${weather[2].city} with a humidity of ${weather[2].humidity}%`
  );
} else if (question === weather[3].city) {
  alert(
    `It is currently ${Math.round(weather[3].temp)} (${Math.round(
      (weather[3].temp * 9) / 5 + 32
    )}ºF) in ${weather[3].city} with a humidity of ${weather[3].humidity}%`
  );
} else if (question === weather[4].city) {
  alert(
    `It is currently ${Math.round(weather[4].temp)} (${Math.round(
      (weather[4].temp * 9) / 5 + 32
    )}ºF) in ${weather[4].city} with a humidity of ${weather[4].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${question}"`
  );
}
// ================ MRF TASK ================

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  // //  ==== Population below 2lakhs using FILTER ====
  var task1 = result.filter((ele) => ele.population < 200000);
  //   var res1 = task1.map((ele) => console.log(ele.name.common));

  //  ==== Countries in ASIA using FILTER ====
  var task2 = result.filter((ele) => ele.region == "Asia");
  //   var res2 = task2.map((ele) => console.log(ele.name.common));

  // ==== Print Name, Capital, flag using FOREACH ====
  //   var task3 = result.forEach((ele) =>
  //     console.log(`${ele.name.common} : ${ele.capital} : ${ele.flag}`)
  //   );
  // };
  //  ==== Print Popilation using Reduce ========
  var task3 = result.map((ele) => ele.population);
  var res = task3.reduce((acc, val) => {
    return acc + val;
  });
  console.log(res); //  output 7777721563;

  // ==== countries using USD ======
  const countriesWithUSD = result.filter((country) => {
    return country.currencies && country.currencies.USD;
  });

  // Print the country names
  countriesWithUSD.forEach((country) => {
    console.log(country.name.common); // output =>Caribbean Netherlands United States EcuadorAmerican Samoa
  });
};

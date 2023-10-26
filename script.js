console.log("loaded");

const rootElement = document.querySelector("#root");
console.log(rootElement); //kilogoltathatom a kulcsait az adatnak

const fetchUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json(); //kicsomagolja aválaszból az adatot a jobboldali rész
  return data;
};

const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
   </div>
    `;

async function init() {
  // felkészítjük a JS-t, hogy a f-ben lesznek async kódok
  const data = await fetchUrl("https://restcountries.com/v3.1/all");

  console.log(data);

  data.forEach((country) =>
    rootElement.insertAdjacentHTML("beforeend", countryComponent(country))
  );
}

init();

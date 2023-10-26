console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement) //kilogoltathatom a kulcsait az adatnak

rootElement.innerHTML = "sziasztok"

const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
   </div>
    `

async function init() {  // felkészítjük a JS-t, hogy a f-ben lesznek async kódok
    const response = await fetch("https://restcountries.com/v3.1/all")  //megvárjuk a fetch válaszát (promise helyett)
    const data = await response.json() //megvárjuk, hogy a response megjöjjön (promise helyett) => itt lesz elérhető az adatunk. Kimentettük egy változóba, és később használhatjuk
    console.log(data)

    

    //data.forEach(country =>  rootElement.innerHTML += countryComponent(country)) // a lista végére fogja mindig hozzáadni az újabb elemet. Ha szeretnénk ezen változtatni:
    //data.forEach(country =>  rootElement.innerHTML += countryComponent(country) + rootElement.innerHTML) // az elejéhez fűzze hozzá. De ez csűnya

  /*   rootElement.innerHTML="content";
    rootElement.insertAdjacentHTML("beforeend", "new-content") */

    data.forEach(country =>  rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))
    
    
}

init()
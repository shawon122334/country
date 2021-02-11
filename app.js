fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayAll(data))

// function displayAll(data){
//     console.log(data.name);
// }


const displayAll = data => {
    const countries = document.getElementById("countries");
    //-----------------------------------------------------------------------
    //we will use for each now ,comment out for loop 
    //loop for getting all elements from the array 
    // for (let i = 0; i < data.length; i++) {
    //     const country = data[i];

    //     //-------------------------------------------------
           //we will make a countryInfo and use `` caret to reduce code 
    //     // console.log(country.name);
    //     //making a div and 3 other tags
    //     // const div1=document.createElement('div');
    //     // const h2=document.createElement('h2');
    //     // const p1=document.createElement('p');
    //     // const p2=document.createElement('p');

    //     // //putting value to these tags
    //     // h2.innerText=country.name;
    //     // p1.innerText=country.capital;
    //     // p2.innerText=country.region;

    //     // //putting these tags inside the div
    //     // div1.appendChild(h2);
    //     // div1.appendChild(p1);
    //     // div1.appendChild(p2);
    //     //-------------------------------------
    //     const div1 = document.createElement('div');
    //     div1.className='countryDiv';
    //     const countryInfo = `
    //         <h2 class="country-name">${country.name}</h2>
    //         <p class="para">${country.capital}</>
    //         <p class="para">${country.region}</p>
    //     `
    //     div1.innerHTML = countryInfo;
    //     //putting this tag to the html div tag
    //     countries.appendChild(div1);
    // }
    //-------------------------------------------------------------
    data.forEach(country => {
        const div1 = document.createElement('div');
        div1.className="countryDiv";
        const countryInfo = `
            <h2 class="country-name">${country.name}</h2>
            <p class="para">capital : ${country.capital}</>
            <p class="para">region : ${country.region}</p>
            <button onclick="displayDetails('${country.name}')">Details</button>
        `
        div1.innerHTML=countryInfo;
        countries.appendChild(div1);
    });
}
const displayDetails=name1=>{
    const url =`https://restcountries.eu/rest/v2/name/${name1}`; 
    // console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayCountryDetails(data[0]))
}
const displayCountryDetails=country=>{
    const details=document.getElementById("details");
    const putDetail=`
        <p>populations is : ${country.population}</p>
        <p>area is : ${country.area}</p>
        <p>native name is : ${country.nativeName}</p>
        <img src="${country.flag}">
    `
    details.innerHTML=putDetail;
}
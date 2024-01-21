// Add an event listener to fetch data from the Advice Slip JSON API

// Loads a slip object, a simple piece of advice

window.addEventListener("DOMContentLoaded", FetchData)

// Uses an asynchronus function
async function FetchData () {
    // Awaits fetched data from the API
    const apiResponse = await fetch("https://api.adviceslip.com/advice");
    // Awaits a loaded JSON file containing the slip object data and logs it
    const jsonForm = await apiResponse.json();

    console.log(jsonForm);
}
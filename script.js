const apiLink = "https://api.adviceslip.com/advice";
// Grabs the advice title, content, and button
const adviceNumberId = document.querySelector("#advice-title");
const adviceDisplayContent = document.querySelector("#advice-content");
const fetchAdviceButton = document.querySelector("#generate-button");

// fetches data from the Advice Slip JSON API
// Uses an async function to fetch data while other tasks are being completed
const fetchUserAdvice = async () => {
     // Awaits fetched data from the API
    const recieveResponse = await fetch(apiLink);
    // Awaits a loaded JSON file containing the slip object data and logs it
    const adviceOut = await recieveResponse.json();
    // Returns the fetched data
    return adviceOut;
}

// Updates the advice title and content to the browser (render)
const updateTitledContent = (fetchedObj) => {
    // Destructures the object into smaller parts
    const {id, advice} = fetchedObj;

    adviceNumberId.textContent = `Advice #${id}`;
    adviceDisplayContent.textContent = advice;
}

// Takes the fetched data (siip) and calls the updateTitledContent function
const generateNewAdvice = async () => {
    const genData = await fetchUserAdvice();
    const adviceOut = genData.slip;

    updateTitledContent(adviceOut);
}

window.addEventListener('DOMContentLoaded', () => {
    // When the generate button is clicked, it will generate new advice
    fetchAdviceButton.addEventListener('click', generateNewAdvice);
    // Fetches advice upon the page loading
    generateNewAdvice();
});


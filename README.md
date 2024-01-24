# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [https://github.com/Lolito-Lindsey-Official/advice-generator-app]
- Live Site URL: [Add live site URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- JavaScript DOM manipulation, asynchronus functions, and deconstruction
- Advice Slip JSON API

### What I learned

This was a valuable project to me since it served as a way to reinforce some essential JavaScript concepts. I felt that I was rusty with asynchronus functions and deconstruction, so this felt like a way to do some trial and error with them. 

Since this was my first time tinkering with an API (I think of them as digital libraires that one can fetch data from), this code snippet is where I did the most learning. I would further say that learning how to use async and await made all the difference when I realized they act as stop gaps to ensure the flow of the program.

```js
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
```

### Continued development

To keep it succinct, I will continue to grow my understanding of the JavaScript concepts used in this project with future ones. Also, using the Advisor Slip JSON API has made me curious about what I do with other APIs and what I can make with them.

Any feedback is appreiciated since software is never in its final draft.

### Useful resources

- [Resource 1](https://www.youtube.com/watch?v=SjjmHNdE32Y) - This helped me improve on the JavaScript concepts needed to make this project possible (DOM manipulation, asynchronous functions, and fetching API data). I really liked this video and plan on applying the mentioned concepts in future projects. Shoutout to SeerStudio!
- [Resource 2](https://www.freecodecamp.org/news/asynchronous-javascript/) - This is an amazing article which helped me finally understand asynchronous functions. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@Lolito-Lindsey-Official](https://www.frontendmentor.io/profile/Lolito-Lindsey-Official)

## Acknowledgments

Shoutout to Seer Studio for assisting me with re-gaining an understanding with JavaScript concepts needed for an upcoming React certification that I will be taking. Wish me luck!


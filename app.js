// const formSearch = document.querySelector('#formsearch');
// const inputtxt = document.querySelector('#inputtxt');
// const butt = document.querySelector('#butt');
// const showTitle = document.querySelector('#showTitle');
// const container = document.querySelector('#container');

// const submitfunc = async (e) => {
//     container.style.display = 'block';
//     showTitle.innerHTML = `You searched for shows containing : ${inputtxt.value}`
//     e.preventDefault();
//     const userInput = inputtxt.value;
//     const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`)
//     makeImage(res.data);
//     console.log(res.data);
// }

// const makeImage = (shows) => {
//     if (shows.length === 0) {
//         const showTxt = document.createElement('h2');
//         showTxt.innerHTML = 'This title does not exist on this site';
//         container.appendChild(showTxt);
 
//     }
//     for(let result of shows){
//         if(result.show.image){
//         const showImg = document.createElement('IMG');
//         showImg.src = result.show.image.medium;
//         container.appendChild(showImg);

//     } else{
//             const showText = document.createElement('h2');
//             showText.innerHTML = result.show.name +' '+ 'image not available';
//             container.appendChild(showText);

//             }
            
//         }
//     }
//     inputtxt.addEventListener('input', () => {
//         if (inputtxt.value === '') {
//             clearSearch();
//         }
//     });

//     const clearSearch = () => {
//             container.style.display = 'none';
//             showTitle.innerHTML = '';
//     }
   

// formSearch.addEventListener('submit',submitfunc);

const formSearch = document.querySelector('#formsearch');
const inputtxt = document.querySelector('#inputtxt');
const showTitle = document.querySelector('#showTitle');
const container = document.querySelector('#container');

const submitfunc = async (e) => {
    e.preventDefault();
    const userInput = inputtxt.value;
    showTitle.innerHTML = `You searched for shows containing: ${userInput}`;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`);
    clearResults(); // Clear previous results before displaying new ones
    makeImage(res.data);
    console.log(res.data);
}

const makeImage = (shows) => {
    if (shows.length === 0) {
        const showTxt = document.createElement('h2');
        showTxt.innerHTML = 'This title does not exist on this site';
        container.appendChild(showTxt);
    } else {
        for (let result of shows) {
            if (result.show.image) {
                const showImg = document.createElement('IMG');
                showImg.src = result.show.image.medium;
                container.appendChild(showImg);
            } else {
                const showText = document.createElement('h2');
                showText.innerHTML = result.show.name + ' image not available';
                container.appendChild(showText);
            }
        }
    }
    container.style.display = 'block'; // Show the container after adding results
}

const clearResults = () => {
    container.innerHTML = ''; // Clear all children of the container
    showTitle.innerHTML = ''; // Clear the title
}

inputtxt.addEventListener('input', () => {
    if (inputtxt.value === '') {
        clearResults();
        container.style.display = 'none'; // Hide the container when input is cleared
    }
});

formSearch.addEventListener('submit', submitfunc);

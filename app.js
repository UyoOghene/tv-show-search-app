const formSearch = document.querySelector('#formsearch');
const inputtxt = document.querySelector('#inputtxt');
const butt = document.querySelector('#butt');
const showTitle = document.querySelector('#showTitle');
const container = document.querySelector('#container');

const submitfunc = async (e) => {
    showTitle.innerHTML = `You searched for shows containing : ${inputtxt.value}`
    e.preventDefault();
    const userInput = inputtxt.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`)
    makeImage(res.data);
    console.log(res.data);
}

const makeImage = (shows) => {
    if (shows.length === 0) {
        const showTxt = document.createElement('h2');
        showTxt.innerHTML = 'This title does not exist on this site';
        container.appendChild(showTxt);
 
    }
    for(let result of shows){
        if(result.show.image){
        const showImg = document.createElement('IMG');
        showImg.src = result.show.image.medium;
        container.appendChild(showImg);

    } else{
            const showText = document.createElement('h2');
            showText.innerHTML = result.show.name +' '+ 'image not available';
            container.appendChild(showText);

            }
            
        }
    }
    inputtxt.addEventListener('input', () => {
        if (inputtxt.value === '') {
            clearSearch();
        }
    });

    const clearSearch = () => {
            container.style.display = 'none';
            showTitle.innerHTML = '';
    }
   

formSearch.addEventListener('submit',submitfunc);

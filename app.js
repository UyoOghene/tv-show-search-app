const formSearch = document.querySelector('#formsearch');
const inputtxt = document.querySelector('#inputtxt');
const butt = document.querySelector('#butt');

const submitfunc = async (e) => {
    e.preventDefault();
    const userInput = inputtxt.value;
   const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`)
   console.log(res.data[1].show.image.medium);
   const showImg = document.createElement('IMG');
  showImg.src = res.data[1].show.image.medium;
   document.body.appendChild(showImg)

}
formSearch.addEventListener('submit',submitfunc);

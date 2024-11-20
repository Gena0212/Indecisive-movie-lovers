function search(keywordsArray, genre, year) {
    // Returns and array of movies that should appear as the result of search

    console.log('enteres into serahc function')

    let searchResult = [];
    
    for (j = 0; j < moviesData.length; j++) {
        let movieObj = moviesData[j];

        let movieInSearchResult = false;

        for (i = 0; !movieInSearchResult && i <keywordsArray.length; i++){

            if (movieObj.Title.includes(keywordsArray[i])){
                console.log('obj title is', movieObj.Title)
                searchResult.push(movieObj);
                movieInSearchResult = true;
            } 
        }

        if (!movieInSearchResult && movieObj.Genre.includes(genre)) {
            console.log('movie genre is ', movieObj.Genre, typeof movieObj.Genre)
            searchResult.push(movieObj);
            movieInSearchResult = true;
        } else if (!movieInSearchResult && movieObj.Year === year){
            console.log(movieObj.year, 'yera is');
            searchResult.push(movieObj);
        }
    }

    return searchResult
}

function createMovieCard(item){
    const cardEL = document.createElement('section');
    cardEL.classList.add('card');

    const imgEl = document.createElement('img');
    imgEl.src = item.Poster;
    cardEL.classList.add('card__poster');
    cardEL.appendChild(imgEl);

    const titleEl = document.createElement('p');
    titleEl.textContent = item.Title;
    titleEl.classList.add('card__title');
    cardEL.appendChild(titleEl);


    const directorEL = document.createElement('p');
    directorEL.textContent = item.Director.split(',')[0];
    directorEL.classList.add('card__director')
    cardEL.appendChild(directorEL);

    const ratingEl = document.createElement('p');
    ratingEl.textContent = 'IMDB rating:' + item.imdbRating;
    ratingEl.classList.add('card__rating');
    cardEL.appendChild(ratingEl);

    return cardEL
  
}

function renderMovies(searchResultsArray) {
    const resultsEl = document.getElementById('results');

    resultsEl.innerHTML = "";



    searchResultsArray.forEach((movie)=> {
        const movieCard = createMovieCard(movie);
        resultsEl.appendChild(movieCard);
    })
}



function handleSubmit(event) {

    console.log('form did submit')

    event.preventDefault();

    const keywordsArray = event.target.keyword.value.split();
    let genre = event.target.genre.value;
    let year = event.target.genre.value;

    const searchResultsArray = search(keywordsArray, genre, year);
    console.log('search results are', searchResultsArray[0])

    renderMovies(searchResultsArray)
}

const formEl = document.getElementById('search');

formEl.addEventListener('submit', handleSubmit);

function search(event) {
    // Returns and array of movies that should appear as the result of search

    let keywordsArray = event.target.keyword.value.split();
    let genre = event.target.genre.value;
    let year = event.target.genre.value;
    let searchResult = [];

    for (j = 0; j < moviesData.length; j++) {

        let movieObj = moviesData[j];
        let movieInSearchResult = false;

        for (i = 0; !movieInSearchResult && i <keywordsArray.length; i++){

            if (moviesObj[Title].includes(keywordsArray[i])){
                searchResult.push(moviesObj);
                movieInSearchResult = true;
            } 
        }

        if (!movieInSearchResult && movieObj[Genre].includes(genre)) {
            searchResult.push(movieObj);
            movieInSearchResult = true;
        } else if (!movieInSearchResult && movieObj.Year === year){
            searchResult.push(moviesObj);
        }
    }

    return searchResult
}

function createMovieCard(item){
    const cardEL = document.createElement('section');
    cardEL.classList.add('card');

    const imgEl = document.createElement('img');
    imgEl.src = item[Poster];
    cardEL.classList.add('card__poster');
    cardEL.appendChild(imgEl);

    const titleEl = document.createElement('p');
    titleEl.textContent = item.Title;
    titleEl.classList.add('card__title');
    cardEL.appendChild(titleEl);


    const directorEL = document.createElement('p');
    directorEl.textContent = item.Director.split(',')[0];
    directorEL.classList.add('card__director')
    cardEL.appendChild(directorEL);

    const ratingEl = document.createElement('p');
    ratingEl.textContent = 'IMDB rating:' + item.imdbRating;
    ratingEl.classList.add('card__rating');
    cardEL.appendChild(ratingEl);
  
}



function handleSubmit(event) {
    event.preventDefault();

    const results = document.querySelector();

    const searchResultsArray = search(event);

    searchResultsArray.forEach((movie)=> {
        const movieCard = createMovieCard(movie);
        results.appendChild(movieCard);
    })


}
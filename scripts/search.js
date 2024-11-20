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

function movieCard(item){

}



function handleSubmit(event) {
    event.preventDefault();

    const searchResultsArray = search(event);

    searchResultsArray.forEach((movie)=> {
        movieCard(movie);
    })


}
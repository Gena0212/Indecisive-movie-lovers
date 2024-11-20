class Api {
    constructor(apiKey, id) {
        this.baseUrl = "https://www.omdbapi.com/";
        this.apiKey = apiKey;
        this.id = id;
    }

    async getApiData() {
        const response = await axios.get(
            `${this.baseUrl}?i=${this.id}&apikey=${this.apiKey}`
        );

        return response.data
    }
}

const moviesData = []


for (let i = 0; i < ids.length; i++){
    const api = new Api("3a38116e", ids[i]);
    
    async function fetchData() {
        
        const data = await api.getApiData();

        moviesData.push(data)
    }
    
    fetchData()
}

console.log(moviesData)



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

const api = new Api("3a38116e", "tt3896198");


async function fetchAndDisplayData() {
    const data = await api.getApiData();
    console.log(data);
}

fetchAndDisplayData()


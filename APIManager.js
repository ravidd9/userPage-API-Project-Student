//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    getData() {
        return this.data
    }

    randomUserAPI() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: result => {
                this.data.user = {
                    picture: result.results[0].picture["medium"],
                    firstName: result.results[0].name["first"],
                    lastName: result.results[0].name["last"],
                    city: result.results[0].location["city"],
                    state: result.results[0].location["state"]
                }
            }
        });

    }
    randomFriendsAPI() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=6',
            dataType: 'json',
            success: result => {
                this.data.friends = []
                for (let index in result.results) {
                    this.data.friends.push(
                        result.results[index].name["first"] + " " +
                        result.results[index].name["last"]
                    )

                }
            }
        })
    }
    randomQuotesAPI() {
        $.ajax({
            url: 'https://quotes.rest/qod',
            dataType: 'json',
            success: result => {
                this.data.quote = {
                    text: result.contents.quotes[0]["quote"],
                    author: result.contents.quotes[0]["author"]
                }
            }
        })
    }

    randomPokemonAPI() {
        let id =  Math.floor(Math.random() * (808 - 1))
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + id,
            dataType: 'json',
            success: result => {
                this.data.pokemon = {
                    picture: result.sprites["front_default"],
                    name: result["name"]
                }
            }
        })
    }
    randomMeatAPI() {
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat',
            dataType: 'json',
            success: result => {
                this.data.meat = result[0] 
            }
        })
    }
    toProperCase(text) {
        text = text[0].toUpperCase() + text.substr(1).toLowerCase()
        return text
    }
    loadData() {
        this.randomUserAPI()
        this.randomFriendsAPI()
        this.randomQuotesAPI()
        this.randomPokemonAPI()
        this.randomMeatAPI()
        //you should make all your API requests here
        //each request should update the `data` object accordingly
    }
}
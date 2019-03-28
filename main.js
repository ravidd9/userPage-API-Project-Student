// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance

let apiManager = new APIManager()
let renderer = new Renderer()
// let savedID


Handlebars.registerHelper("toProperCase", function (item) {
    return item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()
})


const loadData = function () {
    apiManager.loadData()
}
const renderData = function () {
    renderer.render(apiManager.getData())
}
const saveUser = function () {
    // savedID +=1 ||0
    let name = apiManager.getData().user.firstName + " " + apiManager.getData().user.lastName
    console.log( typeof( name))
    // localStorage.saved ? null: localStorage.saved = {}
    localStorage[name]= JSON.stringify(apiManager.getData())
    let option = `<option value="${name}" >${name}</option>`
    $("#mySelect").append($(option))
}
const loadUser = function () {
    let s1 = $("#mySelect").val()
    renderer.render(JSON.parse(localStorage[s1]))
}
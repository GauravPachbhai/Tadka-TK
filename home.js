const cityUrl = "https://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

function getcity(){
    fetch(cityUrl,{method:'GET'})
    .then((rest) => rest.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option')
            let text = document.createTextNode(item.state)
            element.appendChild(text)
            element.value = item.state_id
            document.getElementById('city').appendChild(element)

        })
    })
}

function getreset(){
    let cityId = document.getElementById('city').value;
    let rest  = document.getElementById('reselect');
    while (rest.length >0){
        rest.remove(0)
    }
    fetch(`${restUrl},${cityId}`,{method:'GEt'})
    .then((rest) => rest.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option')
            let text = document.createTextNode(item.restaurant_name)
            element.appendChild(text)
            rest.appendChild(element)
        })
    })
}
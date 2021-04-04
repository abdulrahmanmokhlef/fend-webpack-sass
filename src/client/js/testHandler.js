function fetchExternalApi(event){
    event.preventDefault()

    fetch('https://reqres.in/api/users/2')
    .then(res =>{
        return res.json();
        debugger
    })
    .then(function(data){
        debugger

        let id = data.data.id;
        let name = data.data.first_name;
        let apiSource = "https://reqres.in/api/users/2"
        document.getElementById('externalApi').innerHTML = "External Api: " + apiSource;
        document.getElementById('id').innerHTML = "Id: " + id;
        document.getElementById('externalApi').innerHTML = "Name: " + name;

    })
}

export{fetchExternalApi}
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>{   
    return response.json()
    }).then(json =>{
        console.log(json.message);
    })

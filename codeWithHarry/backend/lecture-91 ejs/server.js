const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let myBrand ="johhny"
    let string = "search Now"
    res.render(`index`,{brand:myBrand, search:string})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
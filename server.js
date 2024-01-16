const express = require ('express') 
const app = express()


app.get('/',  (req,res) => {
    res.send (`
        <h1> 99 bottles of beer on the wall </h1>
        <a href = '/98'> take one down, pass it around </a> 
    `)
    
})

app.get ('/:number_of_bottles' , (req, res) => {

    let bottles = req.params.number_of_bottles

    if (bottles > 1) {
        res.send(`
            <h1> ${bottles} bottles of beer on the wall </h1>
            <a href = ${bottles-1} > take one down, pass it around </a> 
        `)
    } else if (bottles = 1 ) {
        res.send (`
            <a href = '/' > Start Over </a> 
        `)
    }
})



app.listen(3000, function() {
    console.log('Listening')
})
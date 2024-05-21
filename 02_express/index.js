import express from 'express'

const app = express()
const port = 3000

// acctep data from frontend
app.use(express.json())

let teaData = []
let nextId = 1

// Update and delete
app.post('/teas', (req, res) => {
    const {name, price} = req.body

    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)

    res.status(201).send(newTea)
})

app.get('/teas', (req, res) =>{
    res.status(200).send(teaData)
})

app.get('/teas/:id', (req, res) =>{
    const tea = teaData.find( t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('Tea not found')
    }
    res.status(200).send(tea)
})

// update 
app.put('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('Tea not found')
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.send(200).send(tea)

})

// Delete
app.delete('/teas/:id', (req, res) => {
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id))
    if(index === -1)
    {
        return res.status(404).send('tea not found')
    }
    teaData.splice(index, 1)
    return res.status(204).send('tea delete')
 
})

// How to play with route 
// app.get("/", (req, res) =>{
//     res.send("Hello from Arup")
// })

// app.get("/ice-tea", (req, res) =>{
//     res.send("What ice tea would you prefer ?") 
// })

// app.get("/twitter", (req, res) =>{
//     res.send("Welcome to Arup Twitter Account")
// })

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
}) 
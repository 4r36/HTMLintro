const express = require('express')

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.send('Hello World')
  }) 

app.get('/:nome', (req, res)=>{
  res.send('Hello '+ req.params.nome)
})

const port = 3000
 
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
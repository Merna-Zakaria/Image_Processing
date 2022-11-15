import express from 'express'
import csv from 'csvtojson'
import {promises as fsPromises} from 'fs'; 
const routes = require("./routes/index")
const handleImgSize = require ("./utilities/middlewares/handleImgSize")

const app = express()
app.use(handleImgSize)
app.use('/api', routes)

const inputFile = './users.csv'
const outputFile = 'users.json'

app.get('/convert', (req, res) => { 
    res.send('converting is processing')
    csv().fromFile(inputFile).then(data => {
        let newData = data.map((item: {
            first_name:string, last_name:string, phone: string
        }) => {
            let first = item.first_name
            let last = item.last_name
            let phone = item.phone
            if(item.phone === ''){
                item.phone='missing data'
            }
            return {first, last, phone}
        })
        fsPromises.writeFile(outputFile, JSON.stringify(newData))
    })
  });

const PORT = 3000;
  
app.listen(PORT, () =>  console.log("Server is Successfully Running, and App is listening on port "+ PORT))



